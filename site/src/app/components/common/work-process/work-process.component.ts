import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {Router} from "@angular/router";

interface Step {
    number: number;
    title: string;
    description: string;
    state: 'default' | 'hovered';
}

@Component({
    selector: 'app-work-process',
    templateUrl: './work-process.component.html',
    styleUrls: ['./work-process.component.scss'],
    animations: [
        trigger('hoverEffect', [
            state('default', style({
                transform: 'scale(1)'
            })),
            state('hovered', style({
                transform: 'scale(1.05)'
            })),
            transition('default <=> hovered', [
                animate('0.3s')
            ])
        ])
    ]
})
export class WorkProcessComponent {
    constructor(
        public router: Router
    ) { }

    steps: Step[] = [
        {
            number: 1,
            title: 'Discovery and Consultation',
            description: 'We kick off by diving deep into your business to fully understand your needs, goals, and the challenges you face, setting the foundation for a tailored digital strategy.',
            state: 'default'
        },
        {
            number: 2,
            title: 'Strategy and Planning',
            description: 'Drawing from our initial discussions, we develop a comprehensive plan that outlines your project\'s scope, deadlines, and key milestones, ensuring clarity and alignment from the start.',
            state: 'default'
        },
        {
            number: 3,
            title: 'Design, Development or Strategy',
            description: 'Based on your needs and the services agreed upon, our teams bring your vision to life through meticulous design, robust development or smart strategies, creating functional and visually compelling digital solutions that resonate with your audience.',
            state: 'default'
        },
        {
            number: 4,
            title: 'Testing and Refinement',
            description: 'We conduct extensive testing across all platforms to ensure flawless functionality and user experience, making precise adjustments to deliver the highest quality.',
            state: 'default'
        },
        {
            number: 5,
            title: 'Launch and Evaluation',
            description: 'After launching your project, we continue to monitor its performance and impact, using real-time feedback to optimize continuously and ensure it meets your strategic goals.',
            state: 'default'
        }
    ];

    toggleAnimation(step: Step, state: 'default' | 'hovered') {
        step.state = state;
    }
}
