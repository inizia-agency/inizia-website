import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { HeaderComponent } from './components/common/header/header.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { ProjectsComponent } from './components/common/projects/projects.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { ServicesComponent } from './components/common/services/services.component';
import { QuotesComponent } from './components/common/quotes/quotes.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { LetsTalkComponent } from './components/common/lets-talk/lets-talk.component';
import { ExpertiseComponent } from './components/common/expertise/expertise.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { AboutComponent } from './components/common/about/about.component';
import { TeamComponent } from './components/common/team/team.component';
import { HomefourBannerComponent } from './components/pages/home-demo-four/homefour-banner/homefour-banner.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { ServicesPageTwoComponent } from './components/pages/services-page-two/services-page-two.component';
import { ServicesPageThreeComponent } from './components/pages/services-page-three/services-page-three.component';
import { ServicesPageFourComponent } from './components/pages/services-page-four/services-page-four.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';
import { PortfolioPageOneComponent } from './components/pages/portfolio-page-one/portfolio-page-one.component';
import { PortfolioPageTwoComponent } from './components/pages/portfolio-page-two/portfolio-page-two.component';
import { PortfolioPageThreeComponent } from './components/pages/portfolio-page-three/portfolio-page-three.component';
import { PortfolioDetailsPageComponent } from './components/pages/portfolio-details-page/portfolio-details-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { ClientsFeedbackPageComponent } from './components/pages/clients-feedback-page/clients-feedback-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { WidgetSidebarComponent } from './components/common/widget-sidebar/widget-sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        HomeDemoThreeComponent,
        HomeDemoFourComponent,
        FooterComponent,
        SubscribeComponent,
        NotFoundComponent,
        HeaderComponent,
        BlogComponent,
        PricingComponent,
        ProjectsComponent,
        WhyChooseUsComponent,
        FeedbackComponent,
        FunfactsComponent,
        ServicesComponent,
        QuotesComponent,
        FeaturesComponent,
        PartnerComponent,
        HomeoneBannerComponent,
        LetsTalkComponent,
        ExpertiseComponent,
        HometwoBannerComponent,
        HomethreeBannerComponent,
        AboutComponent,
        TeamComponent,
        HomefourBannerComponent,
        ServicesPageOneComponent,
        ServicesPageTwoComponent,
        ServicesPageThreeComponent,
        ServicesPageFourComponent,
        ServiceDetailsPageComponent,
        PortfolioPageOneComponent,
        PortfolioPageTwoComponent,
        PortfolioPageThreeComponent,
        PortfolioDetailsPageComponent,
        ContactPageComponent,
        FaqComponent,
        FaqPageComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent,
        ProfileAuthenticationPageComponent,
        ForgotPasswordPageComponent,
        ClientsFeedbackPageComponent,
        PricingPageComponent,
        TeamPageComponent,
        AboutPageComponent,
        BlogGridPageComponent,
        BlogDetailsPageComponent,
        BlogRightSidebarPageComponent,
        WidgetSidebarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        AccordionModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }