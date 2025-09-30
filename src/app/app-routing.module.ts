import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ClientsFeedbackPageComponent } from './components/pages/clients-feedback-page/clients-feedback-page.component';
import {ContactPageComponent} from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PortfolioDetailsPageComponent } from './components/pages/portfolio-details-page/portfolio-details-page.component';
import { PortfolioPageComponent } from './components/pages/portfolio-page/portfolio-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import {BusinessCardComponent} from "./components/pages/business-card/business-card.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'values', component: TeamPageComponent},
    {path: 'services', component: ServicesPageOneComponent},
    {path: 'projects', component: PortfolioPageComponent},
    {path: 'clients-feedback', component: ClientsFeedbackPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'business-card', component: BusinessCardComponent},

    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
