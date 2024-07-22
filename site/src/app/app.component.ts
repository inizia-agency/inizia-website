import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Inizia | Digital Agency';
    showHeaderFooter: boolean = true;
    darkMode = false;

    constructor(private router: Router) {
        this.darkMode = JSON.parse(localStorage.getItem('darkMode')!);
    }

    ngOnInit() {
        this.router.events
            .pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd)
            )
            .subscribe((event: NavigationEnd) => {
                this.showHeaderFooter = !event.urlAfterRedirects.includes('business-card');
            });
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    }

}
