import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare global {
    interface Window {
        calendar?: any;
    }
}

@Component({
    selector: 'app-gcal-button',
    templateUrl: './gcal-button.component.html',
    styleUrls: ['./gcal-button.component.scss']
})
export class GcalButtonComponent implements AfterViewInit {
    /** Your classes and label */
    @Input() brandClass: string = 'btn btn-primary';
    @Input() label: string = 'Schedule a call';

    /** Google scheduling config (replace URL if needed) */
    @Input() url: string =
        'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ZSbN5j_WJz1UyYMlwQlPbRxkBbyWkXRcDoC9G1NW96S2QCNUx68CsdBsRC1wIojLkaTZoyK70?gv=true';
    @Input() color: string = '#C0CA33';

    @ViewChild('hiddenHost', { static: true }) hiddenHost!: ElementRef<HTMLDivElement>;

    private jsSrc  = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    private cssHref = 'https://calendar.google.com/calendar/scheduling-button-script.css';

    private ready = false;
    private triggerBtn?: HTMLButtonElement;

    async ngAfterViewInit() {
        try {
            await this.loadAssetsOnce();
            this.initHiddenGoogleButton();
            this.ready = true;
        } catch (e) {
            console.error('GCal init failed:', e);
        }
    }

    async onClick() {
        // If Google widget ready, proxy-click its hidden button
        if (this.triggerBtn) {
            this.triggerBtn.click();
            return;
        }
        // Fallback: open URL in a new tab so users aren’t blocked
        window.open(this.url, '_blank', 'noopener');
    }

    // ---- helpers ----
    private loadAssetsOnce(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            try {
                // CSS once
                if (!document.querySelector(`link[href="${this.cssHref}"]`)) {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = this.cssHref;
                    document.head.appendChild(link);
                }

                // If script already loaded, we’re done
                if (window.calendar?.schedulingButton?.load) {
                    resolve();
                    return;
                }

                // Script once
                const existing = document.querySelector<HTMLScriptElement>(`script[src="${this.jsSrc}"]`);
                if (existing) {
                    // Wait until it finishes loading
                    existing.addEventListener('load', () => resolve());
                    existing.addEventListener('error', () => reject(new Error('Google script failed to load')));
                    return;
                }

                const script = document.createElement('script');
                script.src = this.jsSrc;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error('Google script failed to load'));
                document.head.appendChild(script);
            } catch (err) {
                reject(err);
            }
        });
    }

    private initHiddenGoogleButton() {
        const calendar = window.calendar;
        if (!calendar?.schedulingButton?.load) return;

        // Ensure our hidden host exists
        const host = this.hiddenHost.nativeElement;
        if (!host) return;

        // Clean host once to prevent multiple injected buttons
        host.innerHTML = '';

        // Ask Google to inject its button inside our hidden host
        calendar.schedulingButton.load({
            url: this.url,
            color: this.color,
            label: this.label || 'Book an appointment',
            target: host
        });

        // Grab the injected button so we can click it programmatically
        const tryFind = () => host.querySelector('button') as HTMLButtonElement | null;
        const found = tryFind();
        if (found) {
            this.triggerBtn = found;
            return;
        }
        // In case injection is async, observe briefly
        const obs = new MutationObserver(() => {
            const btn = tryFind();
            if (btn) {
                this.triggerBtn = btn;
                obs.disconnect();
            }
        });
        obs.observe(host, { childList: true, subtree: true });
    }
}
