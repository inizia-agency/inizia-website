import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

declare global {
    interface Window { dataLayer: any[]; gtag: (...args: any[]) => void; }
}

@Injectable({ providedIn: 'root' })
export class GaService {
    private loaded = false;
    private measurementId = 'G-KZ4TFCVC1X'; // ✅ hardcoded GA4 tag

    constructor(
        @Inject(DOCUMENT) private doc: Document,
        @Inject(PLATFORM_ID) private pid: Object
    ) {}

    init() {
        if (!isPlatformBrowser(this.pid) || this.loaded || !this.measurementId) return;

        // dataLayer + gtag function
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments); } as any;

        // load gtag.js
        const scriptId = 'ga-gtag';
        if (!this.doc.getElementById(scriptId)) {
            const s = this.doc.createElement('script');
            s.id = scriptId;
            s.async = true;
            s.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
            this.doc.head.appendChild(s);
        }

        // base init
        window.gtag('js', new Date());
        window.gtag('config', this.measurementId);

        this.loaded = true;
    }

    pageView(path: string, title?: string, locationHref?: string) {
        if (!this.loaded) return;
        window.gtag('event', 'page_view', {
            page_path: path,
            page_title: title || this.doc.title,
            page_location: locationHref || (typeof location !== 'undefined' ? location.href : undefined)
        });
    }

    event(name: string, params: Record<string, any> = {}) {
        if (!this.loaded) return;
        window.gtag('event', name, params);
    }
}
