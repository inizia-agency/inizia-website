import { Component } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.scss'
})
export class BusinessCardComponent {
    goToHomepage() {
        window.location.href = '/';
    }

    sendEmail() {
        window.location.href = 'mailto:hello@inizia.agency';
    }

    callPhone() {
        window.location.href = 'tel:+61420400110';
    }

    openInstagram() {
        window.open('https://www.instagram.com/inizia.agency', '_blank');
    }

    openFacebook() {
        window.open('https://www.facebook.com/people/Inizia/61563225435533/', '_blank');
    }

    openLinkedIn() {
        window.open('https://www.linkedin.com/company/inizia-agency', '_blank');
    }

    openMediumBlog() {
        window.open('https://medium.com/@inizia', '_blank');
    }
}
