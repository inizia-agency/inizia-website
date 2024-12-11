import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-whats-next',
    templateUrl: './whats-next.component.html',
    styleUrls: ['./whats-next.component.scss']
})
export class WhatsNextomponent {

    constructor(
        public router: Router
    ) { }

}
