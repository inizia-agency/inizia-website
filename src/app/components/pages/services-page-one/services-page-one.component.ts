import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Register the modules you use
Swiper.use([Navigation, Pagination, A11y]);

@Component({
  selector: 'app-services-page-one',
  templateUrl: './services-page-one.component.html',
  styleUrls: ['./services-page-one.component.scss']
})
export class ServicesPageOneComponent implements AfterViewInit {
  private bookingUrl =
      'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ZSbN5j_WJz1UyYMlwQlPbRxkBbyWkXRcDoC9G1NW96S2QCNUx68CsdBsRC1wIojLkaTZoyK70?gv=true';

  ngAfterViewInit(): void {
    new Swiper('.services-carousel', {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: false,
      navigation: { nextEl: '.services-next', prevEl: '.services-prev' },
      pagination: { el: '.services-pagination', clickable: true },
      breakpoints: {
        0:    { slidesPerView: 1, spaceBetween: 16 },
        768:  { slidesPerView: 2, spaceBetween: 20 },
        1200: { slidesPerView: 3, spaceBetween: 24 }
      }
    });
  }

  openBooking(ref: string) {
    const w = 860, h = 780;
    const left = (window.screenLeft ?? (window as any).screenX ?? 0) + ((window.innerWidth || 0) - w) / 2;
    const top  = (window.screenTop  ?? (window as any).screenY ?? 0) + ((window.innerHeight || 0) - h) / 2;

    window.open(
        `${this.bookingUrl}&ref=${encodeURIComponent(ref)}`,
        'inizia-booking',
        `toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1,width=${w},height=${h},top=${top},left=${left}`
    );
  }
}
