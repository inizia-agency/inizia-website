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
            title: 'Discuss & Understand Your Needs',
            description: 'We start by engaging in a detailed conversation to fully understand your business goals, challenges, and vision. This initial consultation sets the stage for a tailored approach that aligns perfectly with your needs.',
            state: 'default'
        },
        {
            number: 2,
            title: 'Create a Detailed Plan',
            description: 'Based on our discussions, we develop a comprehensive plan that outlines the strategy, design, and implementation steps. This plan is meticulously detailed to ensure it meets your specific requirements and sets clear expectations.',
            state: 'default'
        },
        {
            number: 3,
            title: 'Execution Phase',
            description: 'Our team gets to work, whether it’s designing, developing software, or implementing marketing strategies. Throughout this phase, we maintain open communication, regularly showcasing progress and gathering your feedback to ensure you’re satisfied every step of the way.',
            state: 'default'
        },
        {
            number: 4,
            title: 'Testing and Refinement',
            description: 'Before we finalize anything, we rigorously test and refine every aspect of your project. This ensures that everything functions perfectly and meets our high standards of quality and your expectations.',
            state: 'default'
        },
        {
            number: 5,
            title: 'Launch and Evaluation',
            description: 'With everything perfected, we launch your project and hand over all necessary documentation and training. We ensure a smooth transition and provide ongoing support to help you make the most of your new solution.',
            state: 'default'
        }
    ];

    toggleAnimation(step: Step, state: 'default' | 'hovered') {
        step.state = state;
    }
}
