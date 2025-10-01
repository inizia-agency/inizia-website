import {Component, inject} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {CanonicalService} from "../../../services/canonical.service";

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.scss'
})
export class BusinessCardComponent {
    private title = inject(Title);
    private meta = inject(Meta);

    constructor(private canonical: CanonicalService) {}

    ngOnInit(): void {
        this.title.setTitle('Inizia | Tech Agency');
        this.meta.updateTag({
            name: 'description',
            content: 'Products people want. Clarity founders need.'
        });
        this.canonical.set('https://inizia.agency/services');

        this.meta.updateTag({ property: 'og:title', content: 'Software development services | Inizia' });
        this.meta.updateTag({ property: 'og:description', content: 'Validation, design, development, and support for scalable tech products.' });
        this.meta.updateTag({ property: 'og:url', content: 'https://inizia.agency/services' });
        this.meta.updateTag({ property: 'og:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Software development services | Inizia' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Helping founders validate, design, and build digital products.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });
    }

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
