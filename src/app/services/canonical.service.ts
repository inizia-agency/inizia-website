import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CanonicalService {
    constructor(@Inject(DOCUMENT) private doc: Document) {}
    set(url: string) {
        let link = this.doc.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!link) {
            link = this.doc.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(link);
        }
        link.setAttribute('href', url);
    }
}
