import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";
import {CanonicalService} from "../../../services/canonical.service";

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {
    private title = inject(Title);
    private meta = inject(Meta);

    constructor(private canonical: CanonicalService) {}

    ngOnInit(): void {
        this.title.setTitle('Inizia | Case Studies');
        this.meta.updateTag({
            name: 'description',
            content: 'Explore Inizia’s case studies: how we helped founders validate, design, and build tech products across industries like finance, energy, Retail and more.'
        });
        this.canonical.set('https://inizia.agency/case-studies');

        this.meta.updateTag({ property: 'og:title', content: 'Case Studies | Inizia client success stories' });
        this.meta.updateTag({ property: 'og:description', content: 'Real examples of how Inizia helped founders validate and build successful products.' });
        this.meta.updateTag({ property: 'og:url', content: 'https://inizia.agency/case-studies' });
        this.meta.updateTag({ property: 'og:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Case Studies | Inizia client success stories' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Discover how we work with founders to turn ideas into scalable products.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });
    }
}
