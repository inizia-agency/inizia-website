import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-portfolio-details-page',
    templateUrl: './portfolio-details-page.component.html',
    styleUrls: ['./portfolio-details-page.component.scss']
})
export class PortfolioDetailsPageComponent implements OnInit {
    selectedTab: number = 0;
    project: any;

    projects = [
        {
            id: 1,
            title: 'Mobile Development',
            tabs: [
                {
                    tabTitle: 'Easy Review',
                    image: 'assets/images/projects/project-2.png',
                    description: 'Easy Review is a web and mobile application currently in development. The app aims to facilitate the process of leaving reviews for hospitality venues, making it easier and more engaging for users. The project is still in development, with a focus on creating an intuitive and user-friendly experience to encourage user engagement.',
                    details: {
                        category: 'Mobile and Web App',
                        client: 'Easy Review',
                        status: 'In development',
                        website: 'In development',
                        date: '',
                        socialLinks: [
                            { platform: 'facebook', url: '#', icon: 'flaticon-facebook-app-symbol' },
                            { platform: 'twitter', url: '#', icon: 'flaticon-twitter' },
                            { platform: 'instagram', url: '#', icon: 'flaticon-instagram' },
                            { platform: 'linkedin', url: '#', icon: 'flaticon-linkedin' }
                        ],
                        contact: {
                            phone: '+61450812952',
                            email: 'hello@inizia.agency'
                        }
                    },
                    iconSections: [
                        {
                            icon: 'flaticon-bars',
                            title: 'Challenges',
                            text: 'The primary UX challenge is to design an interface that is both engaging and simple, maximizing the likelihood of users leaving reviews.'
                        },
                        {
                            icon: 'flaticon-web-optimization',
                            title: 'Tech Stack',
                            text: 'The solution was developed with Flutter for the frontend, and Firebase, Node.js + Express for the backend and database.'
                        }
                    ],
                },
                {
                    tabTitle: 'Artesian Hospitality',
                    image: 'assets/images/projects/project-1.png',
                    description: 'Artesian Hospitality is a mobile app developed to be published in both the App Store and Google Play Store. The app implements a point system rewards program, allowing customers to earn points based on their spending at Artesian venues. These points can then be redeemed for various benefits.',
                    details: {
                        category: 'Mobile App',
                        client: 'Artesian Hospitality',
                        website: 'https://artesianhospitality.com/',
                        status: 'Deployed',
                        socialLinks: [
                            { platform: 'facebook', url: '#', icon: 'flaticon-facebook-app-symbol' },
                            { platform: 'twitter', url: '#', icon: 'flaticon-twitter' },
                            { platform: 'instagram', url: '#', icon: 'flaticon-instagram' },
                            { platform: 'linkedin', url: '#', icon: 'flaticon-linkedin' }
                        ],
                        contact: {
                            phone: '+61450812952',
                            email: 'hello@inizia.agency'
                        }
                    },
                    iconSections: [
                        {
                            icon: 'flaticon-bars',
                            title: 'Challenges',
                            text: 'Translating a complex point/rewards/dollar system into software and ensuring it worked as expected through thorough testing.'
                        },
                        {
                            icon: 'flaticon-web-optimization',
                            title: 'Tech Stack',
                            text: 'The solution was developed with Flutter for the frontend, and Google Cloud with TypeScript for the backend and database.'
                        }
                    ],
                    additionalText: [
                        'The app successfully launched on both platforms, providing users with a seamless experience in earning and redeeming points.',
                        'Increased customer engagement and loyalty at Artesian venues.'
                    ]
                }
            ]
        },
        {
            id: 2,
            title: 'Website Development',
            tabs: [
                {
                    tabTitle: 'Play The Wilde',
                    image: 'assets/images/projects/project-4.png',
                    description: 'Play The Wilde required a website in less than three days to showcase their services and portfolio in the construction industry. The design needed to align with their brand styles and effectively communicate their values.',
                    details: {
                        category: 'Website',
                        client: 'Play The Wilde',
                        website: 'https://playthewilde.com/',
                         status: 'Deployed',
                        socialLinks: [
                            { platform: 'facebook', url: '#', icon: 'flaticon-facebook-app-symbol' },
                            { platform: 'twitter', url: '#', icon: 'flaticon-twitter' },
                            { platform: 'instagram', url: '#', icon: 'flaticon-instagram' },
                            { platform: 'linkedin', url: '#', icon: 'flaticon-linkedin' }
                        ],
                        contact: {
                            phone: '+61450812952',
                            email: 'hello@inizia.agency'
                        }
                    },
                    iconSections: [
                        {
                            icon: 'flaticon-bars',
                            title: 'Challenges',
                            text: 'Creating a high-quality, brand-aligned website within an extremely short timeframe.'
                        },
                        {
                            icon: 'flaticon-web-optimization',
                            title: 'Solution',
                            text: 'Designed and developed the website quickly while ensuring it met the client’s branding and communication needs.'
                        }
                    ],
                    additionalText: [
                        'The website effectively showcases Play The Wilde’s services and portfolio.',
                        'The client was highly satisfied with the result, which enhanced their online presence.'
                    ]
                },
                {
                    tabTitle: 'Apex',
                    image: 'assets/images/projects/project-5.png',
                    description: 'Apex needed a website to showcase their services, portfolio, and story. Without any existing branding, they wanted a design that reflected their industry in childcare playgrounds.',
                    details: {
                        category: 'Website',
                        client: 'Apex Building & Management',
                        website: 'https://apexbuildingandmanagement.com.au/',
                        status: 'Deployed',
                        socialLinks: [
                            { platform: 'facebook', url: '#', icon: 'flaticon-facebook-app-symbol' },
                            { platform: 'twitter', url: '#', icon: 'flaticon-twitter' },
                            { platform: 'instagram', url: '#', icon: 'flaticon-instagram' },
                            { platform: 'linkedin', url: '#', icon: 'flaticon-linkedin' }
                        ],
                        contact: {
                            phone: '+61450812952',
                            email: 'hello@inizia.agency'
                        }
                    },
                    iconSections: [
                        {
                            icon: 'flaticon-bars',
                            title: 'Challenges',
                            text: 'Developing a cohesive brand and website that effectively communicated Apex’s services and values within the childcare playground industry.'
                        },
                        {
                            icon: 'flaticon-web-optimization',
                            title: 'Solution',
                            text: 'Designed the website to reflect Apex’s industry.'
                        }
                    ],
                }
            ]
        },
        {
            id: 3,
            title: 'UI/UX Design',
            tabs: [
                {
                    tabTitle: 'Homemade Mobile Application',
                    image: 'assets/images/projects/project-3.png',
                    description: 'Homemade is a mobile application designed to connect cooks with people. The app needed an interface that simplified the complex problem of matching cooks with users, ensuring a smooth and intuitive user experience.',
                    details: {
                        category: 'Mobile App Design',
                        client: 'Homemade App',
                        website: '',
                        status: 'Handed over',
                        socialLinks: [
                            { platform: 'facebook', url: '#', icon: 'flaticon-facebook-app-symbol' },
                            { platform: 'twitter', url: '#', icon: 'flaticon-twitter' },
                            { platform: 'instagram', url: '#', icon: 'flaticon-instagram' },
                            { platform: 'linkedin', url: '#', icon: 'flaticon-linkedin' }
                        ],
                        contact: {
                            phone: '+61450812952',
                            email: 'hello@inizia.agency'
                        }
                    },
                    iconSections: [
                        {
                            icon: 'flaticon-bars',
                            title: 'Challenges',
                            text: 'Simplifying the complex matchmaking process while providing a seamless and engaging user experience.'
                        },
                        {
                            icon: 'flaticon-web-optimization',
                            title: 'Solution',
                            text: 'Designed a user-friendly interface that simplifies the matchmaking process and enhances user engagement.'
                        }
                    ],
                    additionalText: [
                        'The app’s design successfully streamlined the connection process.',
                        'Improved user satisfaction and engagement with the app.'
                    ]
                }
            ]
        }
    ];


    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        const idParam = this.route.snapshot.paramMap.get('id');
        if (idParam) {
            const id = +idParam;
            this.project = this.projects.find(p => p.id === id);
        } else {
            // Handle the case where the id parameter is missing
            console.error('Project ID not found in route');
        }
    }

    selectTab(index: number) {
        this.selectedTab = index;
    }
}
