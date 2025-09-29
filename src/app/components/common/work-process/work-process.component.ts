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
            title: 'Discover',
            description:
                'We kick off with a conversation under NDA to understand your users, your vision, and the problems you’re trying to solve. We dig beneath assumptions to get to the real opportunity before any solutions are discussed.',
            state: 'default',
        },
        {
            number: 2,
            title: 'Validate',
            description:
                'Before writing a line of code, we test your idea through user interviews, smoke tests, or prototypes. We collect real-world feedback to answer one question: are we solving a real problem, in the right way?',
            state: 'default',
        },
        {
            number: 3,
            title: 'Design',
            description:
                'Once we know the direction, we design lean. Interfaces are simple, intuitive, and intentional, focused on guiding users and capturing signal early. Every design decision is tied back to what we’ve learned.',
            state: 'default',
        },
        {
            number: 4,
            title: 'Build',
            description:
                'We build incrementally, starting with the smallest testable version (MVP). Clean code, modular architecture, and short feedback loops mean you stay close to what’s being built and why.',
            state: 'default',
        },
        {
            number: 5,
            title: 'Launch & Learn',
            description:
                'We launch to learn, not just to ship. Post-launch, we track user behavior, gather insights, and continuously iterate. Because real value comes not just from launching but from adapting.',
            state: 'default',
        },
    ];

    toggleAnimation(step: Step, state: 'default' | 'hovered') {
        step.state = state;
    }
}
