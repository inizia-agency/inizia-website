import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {
    project: any;

    projects = [
        { id: 1, title: 'Mobile Development', image: 'assets/images/projects/mobile-dev.jpg', description: 'Description for Mobile Development' },
        { id: 2, title: 'Website Development', image: 'assets/images/projects/web-dev.jpg', description: 'Description for Website Development' },
        { id: 3, title: 'UI/UX Design', image: 'assets/images/projects/uiux-design.jpg', description: 'Description for UI/UX Design' },
    ];

    constructor(private route: ActivatedRoute) { }
}
