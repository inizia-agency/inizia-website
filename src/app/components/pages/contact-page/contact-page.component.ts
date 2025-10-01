import {Component, inject} from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import {Meta, Title} from "@angular/platform-browser";
import {CanonicalService} from "../../../services/canonical.service";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
    name: string = '';
    email: string = '';
    phone: string = '';
    message: string = '';
    successMessage?: string = '';
    errorMessage?: string = '';

    private title = inject(Title);
    private meta = inject(Meta);

    constructor(private canonical: CanonicalService) {}

    ngOnInit(): void {
        this.title.setTitle('Inizia | Contact');
        this.meta.updateTag({
            name: 'description',
            content: 'Get in touch with Inizia to discuss your product idea. Book a meeting to explore for we can help turn your idea into a scalable tech product.'
        });
        this.canonical.set('https://inizia.agency/contact');

        this.meta.updateTag({ property: 'og:title', content: 'Contact Inizia | Book a meeting today' });
        this.meta.updateTag({ property: 'og:description', content: 'Schedule a call with Inizia to start building your tech product.' });
        this.meta.updateTag({ property: 'og:url', content: 'https://inizia.agency/contact' });
        this.meta.updateTag({ property: 'og:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Contact Inizia | Book a meeting today' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Let’s talk about how we can help you validate, design, and build.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://inizia.agency/assets/og/inizia-og.png' });
    }

    public sendMessage(e: Event) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        emailjs.sendForm('service_2v464ge', 'template_93rt1hn', form,{
            publicKey: 'KgL-8FRo_BnzT2BNG',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    this.successMessage = 'Your message has been sent successfully!';
                    this.clearForm();
                    this.clearMessagesAfterDelay();
                },
                (error) => {
                    console.log('FAILED...', (error as EmailJSResponseStatus).text);
                    this.errorMessage = 'Failed to send your message. Please try again.';
                    this.clearMessagesAfterDelay();
                },
            );
    }

    private clearForm() {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.message = '';
    }

    private clearMessagesAfterDelay() {
        setTimeout(() => {
            this.successMessage = '';
            this.errorMessage = '';
        }, 3000);
    }
}
