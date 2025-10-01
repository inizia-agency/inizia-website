// services-page-one.component.ts
import {Component, AfterViewInit, OnDestroy, inject} from '@angular/core';
import Swiper, { Navigation, Pagination, A11y } from 'swiper';
import {Meta, Title} from "@angular/platform-browser";
import {CanonicalService} from "../../../services/canonical.service";

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
  private title = inject(Title);
  private meta = inject(Meta);

  constructor(private canonical: CanonicalService) {}

  ngOnInit(): void {
    this.title.setTitle('Inizia | Our services');
    this.meta.updateTag({
      name: 'description',
      content: 'Our services help you launch and grow tech products that customers love.'
    });
    this.canonical.set('https://inizia.agency/services');

    this.meta.updateTag({ property: 'og:title', content: 'Our services | Inizia' });
    this.meta.updateTag({ property: 'og:description', content: 'Validation, design, development, and support for scalable apps.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://inizia.agency/services' });
    this.meta.updateTag({ property: 'og:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Our services | Inizia' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Helping founders validate, design, and build tech products.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });
  }


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
