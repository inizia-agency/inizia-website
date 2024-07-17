import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { ClientsFeedbackPageComponent } from './components/pages/clients-feedback-page/clients-feedback-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PortfolioDetailsPageComponent } from './components/pages/portfolio-details-page/portfolio-details-page.component';
import { PortfolioPageThreeComponent } from './components/pages/portfolio-page-three/portfolio-page-three.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'values', component: TeamPageComponent},
    {path: 'services', component: ServicesPageOneComponent},
    {path: 'service-details', component: ServiceDetailsPageComponent},
    {path: 'projects', component: PortfolioPageThreeComponent},
    {path: 'project-details', component: PortfolioDetailsPageComponent},
    {path: 'profile-authentication', component: ProfileAuthenticationPageComponent},
    {path: 'forgot-password', component: ForgotPasswordPageComponent},
    {path: 'clients-feedback', component: ClientsFeedbackPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageComponent},

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
