import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tech-use',
    templateUrl: './tech-use.component.html',
    styleUrls: ['./tech-use.component.scss']
})
export class TechUseComponent {
    constructor(
        public router: Router
    ) { }

    partners = [
        { img: 'assets/images/partner/partner1.png', alt: 'Angular Logo' },
        { img: 'assets/images/partner/partner2.png', alt: 'Google Cloud Logo' },
        { img: 'assets/images/partner/partner3.png', alt: 'Flutter Logo' },
        { img: 'assets/images/partner/partner4.png', alt: 'MongoDB Logo' },
        { img: 'assets/images/partner/partner5.png', alt: 'React Logo' },
        { img: 'assets/images/partner/partner6.png', alt: 'Shopify Logo' },
        { img: 'assets/images/partner/partner7.png', alt: 'NodeJs Logo' },
        { img: 'assets/images/partner/partner8.png', alt: 'Adobe XD Logo' },
        { img: 'assets/images/partner/partner9.png', alt: 'Adobe Illustrator Logo' },
        { img: 'assets/images/partner/partner12.png', alt: 'Netlify Logo' },
    ];
}
