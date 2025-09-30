import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
        this.darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
    }

    ngOnInit() {
        this.router.events
            .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                this.showHeaderFooter = !event.urlAfterRedirects.includes('business-card');
            });

        // Load Google Calendar scheduling script dynamically
        const script = document.createElement('script');
        script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
        script.async = true;
        script.onload = () => {
            const cal = (window as any)?.calendar;
            const targetEl = document.getElementById('gcal-btn');
            if (cal?.schedulingButton?.load && targetEl) {
                cal.schedulingButton.load({
                    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ZSbN5j_WJz1UyYMlwQlPbRxkBbyWkXRcDoC9G1NW96S2QCNUx68CsdBsRC1wIojLkaTZoyK70?gv=true',
                    color: '#039BE5',
                    label: 'Book an appointment',
                    target: targetEl
                });
            }
        };
        document.body.appendChild(script);
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    }
}
