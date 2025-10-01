import {Component, inject} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {CanonicalService} from "../../../services/canonical.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private title = inject(Title);
  private meta = inject(Meta);
  constructor(private canonical: CanonicalService) {}

  ngOnInit(): void {
    this.title.setTitle('Inizia');
    this.meta.updateTag({
      name: 'description',
      content: 'Inizia is a tech agency helping non-technical founders validate ideas, design with clarity, and build software that customers actually want.'
    });
    this.canonical.set('https://inizia.agency/');

    this.meta.updateTag({ property: 'og:title', content: 'Inizia | Products people want. Clarity founders need.' });
    this.meta.updateTag({ property: 'og:description', content: 'Tech agency helping founders validate, design, and build successful digital products.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://inizia.agency/' });
    this.meta.updateTag({ property: 'og:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Inizia | Products people want. Clarity founders need.' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Helping founders validate ideas, design with clarity, and build software customers love.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });
  }
}
