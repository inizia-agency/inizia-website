import { Component, OnInit } from '@angular/core';

interface ContactInfo {
    phone: string;
    email: string;
}
interface Details {
    category: string;
    status: string;
    website?: string;
    date?: string;
    contact: ContactInfo;
}
interface IconSection {
    icon: string;
    title: string;
    text: string;
}
interface TabItem {
    tabTitle: string;
    image: string;
    description: string;
    details: Details;
    iconSections: IconSection[];
    additionalText?: string[];
    device: 'desktop' | 'mobile';
}
interface CaseStudiesProject {
    title: string;
    tabs: TabItem[];
}

@Component({
    selector: 'app-portfolio-details-page',
    templateUrl: './portfolio-details-page.component.html',
    styleUrls: ['./portfolio-details-page.component.scss']
})
export class PortfolioDetailsPageComponent implements OnInit {
    selectedTab = 0;
    project!: CaseStudiesProject;

    // One project: Case Studies - each tab is a study case
    private projects: CaseStudiesProject[] = [
        {
            title: 'Case Studies',
            tabs: [
                // 1) Archer Switch - desktop
                {
                    tabTitle: 'Archer Switch',
                    device: 'desktop',
                    image: 'assets/images/projects/archer-switch.png',
                    description:
                        'Highly complex compliance in renewable energy handled with paper forms. We mapped the industry workflows with domain experts and built a lean prototype around the most-used compliance flow.',
                    details: {
                        category: 'Validation & Build',
                        status: 'Prototype successfully delivered — moving to v1',
                        website: 'https://archerswitch.com.au/',
                        contact: { phone: '+61450812952', email: 'hello@inizia.agency' }
                    },
                    iconSections: [
                        { icon: 'flaticon-bars', title: 'Challenge', text: 'Highly complex compliance processes in renewable energy (solar farms). All handled via paper forms. Needed digitalisation but complexity made it hard to know where to begin.' },
                        { icon: 'flaticon-brainstorm', title: 'Approach', text: 'Inizia facilitated workshops and in-person sessions with their domain experts, mapping the industry’s workflows. Identified the most-used compliance flow as the entry point. Designed UX flows, interfaces, database, architecture, and chose the tech stack. Built a semi-functional prototype to showcase and validate direction.' },
                        { icon: 'flaticon-trophy', title: 'Outcome', text: 'Prototype now working and moving toward Version 1. Strategy in place for future monetisation. A paper-based process has been translated into a digital platform.' },
                        { icon: 'flaticon-business-idea', title: 'Key takeaway', text: 'Bridging deep industry expertise with lean software practices can rapidly transform an offline, compliance-heavy process into a scalable digital product.' }
                    ]
                },

                // 2) Revolvr - desktop
                {
                    tabTitle: 'Revolvr',
                    device: 'desktop',
                    image: 'assets/images/projects/revolvr.png',
                    description:
                        'Retailers and brands lacked a clear way to manage consigned stock. We narrowed a broad idea into a lean MVP built as two Shopify apps that communicate via APIs and webhooks.',
                    details: {
                        category: 'Validation & Build',
                        status: 'Delivered successfully',
                        website: 'https://revolvr.io/',
                        contact: { phone: '+61450812952', email: 'hello@inizia.agency' }
                    },
                    iconSections: [
                        { icon: 'flaticon-bars', title: 'Challenge', text: 'Retailers and brands lacked a clear way to manage in real time sales of consigned stock. Client came with a broad idea, too large to tackle in one go.' },
                        { icon: 'flaticon-brainstorm', title: 'Approach', text: 'Inizia refined the problem and scoped a lean MVP. Developed two Shopify apps (retailer + brand) that communicate via APIs and webhooks, with database storage for sales data. Created prioritisation roadmap for next features.' },
                        { icon: 'flaticon-trophy', title: 'Outcome', text: 'MVP launched for internal testing and pitching. Client later moved to in-house management, but Inizia delivered the foundation that proved the concept.' },
                        { icon: 'flaticon-business-idea', title: 'Key takeaway', text: 'When the idea is broad, a small but functional MVP creates traction and enables informed decisions on next steps.' }
                    ]
                },

                // 3) Tellie - mobile
                {
                    tabTitle: 'Tellie',
                    device: 'mobile',
                    image: 'assets/images/projects/tellie.png',
                    description:
                        'Elders face loneliness and tech friction. We shaped a clear concept: an empathetic AI companion with very simple UX, targeted to elder users.',
                    details: {
                        category: 'Validation, Build & Sustain',
                        status: 'About to successfully launch v1',
                        website: 'https://tellie.me/',
                        contact: { phone: '+61450812952', email: 'hello@inizia.agency' }
                    },
                    iconSections: [
                        { icon: 'flaticon-bars', title: 'Challenge', text: 'Elders face loneliness and often struggle with technology. The challenge was to determine how to build something that would be easy to use for elders.' },
                        { icon: 'flaticon-brainstorm', title: 'Approach', text: 'Inizia explored the size of the problem and the user demographic. Designed an AI companion app focused on empathy and simplicity — trained AI interactions to feel like talking to a friend, and built the app with very easy UX.' },
                        { icon: 'flaticon-trophy', title: 'Outcome', text: 'Tellie now has a clear concept, refined problem/solution fit, and a prototype direction. Differentiator lies in empathetic AI tuned specifically for elder users. Tellie is in the process of receiving investment.' },
                        { icon: 'flaticon-business-idea', title: 'Key takeaway', text: 'A vague idea about an AI chat becomes powerful when narrowed down to a specific problem and user group, with UX shaped around their exact needs.' }
                    ]
                },

                // 4) Work In Manufacturing - mobile
                {
                    tabTitle: 'Work In Manufacturing',
                    device: 'mobile',
                    image: 'assets/images/projects/wim.png',
                    description:
                        'Rescue project with deadlines. We audited, triaged, and stabilised the app for App Store and Play Store submissions.',
                    details: {
                        category: 'Project Rescue',
                        status: 'Successfully Delivered',
                        website: 'https://www.benchon.com/',
                        contact: { phone: '+61450812952', email: 'hello@inizia.agency' }
                    },
                    iconSections: [
                        { icon: 'flaticon-bars', title: 'Challenge', text: 'Client had issues with their previous developer, looming deadlines, and a rough product needing to be ready for App Store and Play Store submission.' },
                        { icon: 'flaticon-brainstorm', title: 'Approach', text: 'Inizia performed a rapid audit, jumped into the codebase, and prioritised urgent fixes to stabilise the app.' },
                        { icon: 'flaticon-trophy', title: 'Outcome', text: 'Successfully submitted to both stores and handed off to the client’s in-house team.' },
                        { icon: 'flaticon-business-idea', title: 'Key takeaway', text: 'Rescue projects demand fast problem-solving and flexibility — stabilising the product to meet deadlines while ensuring a clean handover.' }
                    ]
                },

                // 5) Zynk - mobile
                {
                    tabTitle: 'Zynk',
                    device: 'mobile',
                    image: 'assets/images/projects/zynk.png',
                    description:
                        'SMEs suffer from fragmented digital presence. We validated a reviews MVP with hospitality, then iterated into a modular presence suite with short links and QR codes.',
                    details: {
                        category: 'Validation & Build',
                        status: 'Validation and MVP done, building v1',
                        website: 'https://zynk.to/',
                        contact: { phone: '+61450812952', email: 'hello@inizia.agency' }
                    },
                    iconSections: [
                        { icon: 'flaticon-bars', title: 'Challenge', text: 'SMEs struggle with fragmented digital presence across multiple platforms, leading to customer confusion.' },
                        { icon: 'flaticon-brainstorm', title: 'Approach', text: 'Started as a review aggregation MVP, validated with hospitality venues. Iterated based on feedback to expand into a full digital presence suite. Designed modular multi-level pages (people, services, products, venues) with short links, QR codes, and activation toggles.' },
                        { icon: 'flaticon-trophy', title: 'Outcome', text: 'Validation and MVP complete; now building Version 1. Pitching for government grant to accelerate growth.' },
                        { icon: 'flaticon-business-idea', title: 'Key takeaway', text: 'Validation and iteration transform a single-feature MVP into a broader, more valuable platform when grounded in real customer feedback.' }
                    ]
                },

                // 6) Artesian Hospitality - mobile
                {
                    tabTitle: 'Artesian Hospitality',
                    device: 'mobile',
                    image: 'assets/images/projects/artesian.png',
                    description:
                        'Nightclub group needed a loyalty app. External design existed, so we bridged the gap to implementation and integrated a points and tiered rewards system.',
                    details: {
                        category: 'Build',
                        status: 'Successfully Delivered (year 2022)',
                        website: 'https://artesianhospitality.com/',
                        contact: { phone: '+61450812952', email: 'hello@inizia.agency' }
                    },
                    iconSections: [
                        { icon: 'flaticon-bars', title: 'Challenge', text: 'Multiple stakeholders and a gap between design and technical implementation.' },
                        { icon: 'flaticon-brainstorm', title: 'Approach', text: 'Translate design into a working app, integrate spend-to-voucher logic and tiered rewards, align all parties.' },
                        { icon: 'flaticon-trophy', title: 'Outcome', text: 'Functional loyalty app aligned with business goals and customer experience.' },
                        { icon: 'flaticon-business-idea', title: 'Key takeaway', text: 'Collaboration needs flexibility and translation of vision into practical software.' }
                    ]
                },

                // 7) Paint Projex - desktop
                {
                    tabTitle: 'Paint Projex',
                    device: 'desktop',
                    image: 'assets/images/projects/paint-projex.png',
                    description: 'Web app to handle construction projects.',
                    details: {
                        category: 'Build',
                        status: 'Successfully Delivered (year 2022)',
                        website: 'https://paintprojex.com/au/',
                        contact: { phone: '+61450812952', email: 'hello@inizia.agency' }
                    },
                    iconSections: [
                        { icon: 'flaticon-bars', title: 'Challenge', text: 'Multiple stakeholders and a gap between design and technical implementation.' },
                        { icon: 'flaticon-brainstorm', title: 'Approach', text: 'Translate design into a working app, integrate spend-to-voucher logic and tiered rewards, align all parties.' },
                        { icon: 'flaticon-trophy', title: 'Outcome', text: 'Functional loyalty app aligned with business goals and customer experience.' },
                        { icon: 'flaticon-business-idea', title: 'Key takeaway', text: 'Collaboration needs flexibility and translation of vision into practical software.' }
                    ]
                }
            ]
        }
    ];

    ngOnInit(): void {
        this.project = this.projects[0];
    }

    selectTab(index: number) {
        this.selectedTab = index;
    }

    trackByIndex = (_: number, __: any) => _;
}
