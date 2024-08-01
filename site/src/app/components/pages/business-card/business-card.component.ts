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
        window.location.href = 'tel:+61450812952';
    }

    openInstagram() {
        window.open('https://www.instagram.com/inizia.agency', '_blank');
    }

    openLinkedIn() {
        window.open('https://www.linkedin.com/company/inizia-agency', '_blank');
    }
}
