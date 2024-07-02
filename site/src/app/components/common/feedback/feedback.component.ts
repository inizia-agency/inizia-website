import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

    constructor(
        public router: Router
    ) { }

    feedbackSlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		dots: true,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true
    }

}