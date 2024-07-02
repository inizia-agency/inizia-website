import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

    constructor(
        public router: Router
    ) { }

    projectsSlides: OwlOptions = {
        nav: false,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            515: {
                items: 2
            },
            695: {
                items: 2
            },
            935: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    }

}