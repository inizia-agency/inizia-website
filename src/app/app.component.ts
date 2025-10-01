import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import {isBrowser} from "./utils/platform";

declare global {
    interface Window {
        calendar?: any;
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Inizia | Tech Agency';
    showHeaderFooter = true;
    darkMode = false;

    constructor(private router: Router) {
        // this.darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
    }

    ngOnInit() {
        this.router.events
            .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                this.showHeaderFooter = !event.urlAfterRedirects.includes('business-card');
            });
    }

    onCta() {
        if (isBrowser()) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // toggleDarkMode() {
    //     this.darkMode = !this.darkMode;
    //     localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    // }
}
