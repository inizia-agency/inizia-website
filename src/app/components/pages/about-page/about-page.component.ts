import {Component, inject} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {CanonicalService} from "../../../services/canonical.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor(private canonical: CanonicalService) {}

  ngOnInit(): void {
    this.title.setTitle('Inizia | About');
    this.meta.updateTag({
      name: 'description',
      content: 'Learn about Inizia’s mission, values, and team. We work with founders to turn their ideas into scalable tech products with clarity and confidence.'
    });
    this.canonical.set('https://inizia.agency/about');

    this.meta.updateTag({ property: 'og:title', content: 'About Inizia | Our mission and values' });
    this.meta.updateTag({ property: 'og:description', content: 'Partnering with founders to build products with clarity and confidence.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://inizia.agency/about' });
    this.meta.updateTag({ property: 'og:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'About Inizia | Our mission and values' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Helping experienced founders bring their digital ideas to life.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });
  }
}
