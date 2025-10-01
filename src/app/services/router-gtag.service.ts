import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { GaService } from './ga.service';

@Injectable({ providedIn: 'root' })
export class RouterGtagService {
    constructor(
        private router: Router,
        private ga: GaService,
        @Inject(PLATFORM_ID) pid: Object
    ) {
        if (!isPlatformBrowser(pid)) return;

        this.router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            .subscribe((e: any) => {
                const path = e.urlAfterRedirects || e.url || location.pathname + location.search;
                this.ga.pageView(path);
            });
    }
}
