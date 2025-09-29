import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

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

    constructor() {}

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
