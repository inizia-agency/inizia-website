// services-page-one.component.ts
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import Swiper, { Navigation, Pagination, A11y } from 'swiper';

Swiper.use([Navigation, Pagination, A11y]);

@Component({
  selector: 'app-services-page-one',
  templateUrl: './services-page-one.component.html',
  styleUrls: ['./services-page-one.component.scss']
})
export class ServicesPageOneComponent implements AfterViewInit, OnDestroy {
  private swiper?: Swiper;
  private mq = window.matchMedia('(min-width: 992px)'); // desktop breakpoint
  private onMqChange = (e: MediaQueryListEvent) => this.toggleSwiper(e.matches);

  ngAfterViewInit(): void {
    // initial mode
    this.toggleSwiper(this.mq.matches);

    // handle resize/orientation changes
    if (this.mq.addEventListener) this.mq.addEventListener('change', this.onMqChange);
    else (this.mq as any).addListener?.(this.onMqChange); // Safari fallback
  }

  ngOnDestroy(): void {
    if (this.mq.removeEventListener) this.mq.removeEventListener('change', this.onMqChange);
    else (this.mq as any).removeListener?.(this.onMqChange);

    this.destroySwiper();
  }

  /** Enable Swiper on desktop; disable on tablet/mobile */
  private toggleSwiper(desktop: boolean) {
    const carousel = document.querySelector('.services-carousel') as HTMLElement | null;
    if (!carousel) return;

    if (desktop) {
      // ensure native scroll styles are off
      carousel.classList.remove('no-swiper');

      if (!this.swiper) {
        this.swiper = new Swiper('.services-carousel', {
          slidesPerView: 3,
          spaceBetween: 24,
          centeredSlides: true,
          initialSlide: 1,
          loop: false,
          navigation: { nextEl: '.services-next', prevEl: '.services-prev' },
          pagination: { el: '.services-pagination', clickable: true },
          a11y: { enabled: true },
          // desktop config only; we don't run Swiper below 992px
          breakpoints: {
            1200: { slidesPerView: 3, spaceBetween: 24, centeredSlides: true }
          },
          on: {
            init: function () { updateCardStyles(this); },
            slideChange: function () { updateCardStyles(this); }
          }
        });

        function updateCardStyles(swiperInstance: any) {
          swiperInstance.slides.forEach((slideEl: HTMLElement) => {
            slideEl.querySelector('.tier-card')?.classList.remove('active-card');
            slideEl.querySelector('.tier-card')?.classList.add('inactive-card');
          });
          const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
          activeSlide.querySelector('.tier-card')?.classList.add('active-card');
          activeSlide.querySelector('.tier-card')?.classList.remove('inactive-card');
        }
      } else {
        this.swiper.update();
      }
    } else {
      // destroy Swiper → native horizontal scroll
      this.destroySwiper();
      carousel.classList.add('no-swiper'); // CSS below will take over
      // clear any active/inactive classes left by Swiper
      carousel.querySelectorAll('.tier-card').forEach(el => el.classList.remove('active-card','inactive-card'));
    }
  }

  private destroySwiper() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
      this.swiper = undefined;
    }
  }
}
