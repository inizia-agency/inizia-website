import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lets-talk',
    templateUrl: './lets-talk.component.html',
    styleUrls: ['./lets-talk.component.scss']
})
export class LetsTalkComponent {

    constructor(
        public router: Router
    ) { }

}