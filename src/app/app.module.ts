import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavToolbarComponent} from "./nav-toolbar/nav-toolbar.component";
import {ToolbarLinkComponent} from "./nav-toolbar/toolbar-link/toolbar-link.component";
import {HomeComponent} from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {VideosComponent} from "./videos/videos.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {MediumElementBlockComponent} from "./element-block/medium-element-block/medium-element-block.component";
import {HomeTitleComponent} from "./home/home-title/home-title.component";
import {HomeDescriptionComponent} from "./home/home-description/home-description.component";
import {NgOptimizedImage} from "@angular/common";
import {RouteButtonComponent} from "./route-button/route-button.component";
import {ToTopScrollerComponent} from "./to-top-scroller/to-top-scroller.component";
import {FaqComponent} from "./home/home-faq/home-faq.component";
import {FaqElementComponent} from "./home/home-faq/faq-element/faq-element.component";
import {HomeQuestionsComponent} from "./home/home-questions/home-questions.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ContactFormComponent} from "./contact/contact-form/contact-form.component";
import {ContactImageComponent} from "./contact/contact-image/contact-image.component";
import {TextFormFieldErrorComponent} from "./form-field/text-form-field-error/text-form-field-error.component";
import {ContactFormModel} from "./contact/contact-form/contact-form.model";
import {BigElementBlockComponent} from "./element-block/big-element-block/big-element-block.component";
import {VideoElementComponent} from "./videos/video-element/video-element.component";
import {AboutAddressComponent} from "./about/about-address/about-address.component";
import {ToolbarWeatherComponent} from "./nav-toolbar/nav-weather/nav-weather.component";
import {WeatherService} from "./nav-toolbar/nav-weather/nav-weather.service";
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavToolbarComponent,
    ToolbarLinkComponent,
    HomeComponent,
    PortfolioComponent,
    VideosComponent,
    AboutComponent,
    ContactComponent,
    MediumElementBlockComponent,
    HomeTitleComponent,
    HomeDescriptionComponent,
    RouteButtonComponent,
    ToTopScrollerComponent,
    FaqComponent,
    FaqElementComponent,
    HomeQuestionsComponent,
    ContactFormComponent,
    ContactImageComponent,
    TextFormFieldErrorComponent,
    BigElementBlockComponent,
    VideoElementComponent,
    AboutAddressComponent,
    ToolbarWeatherComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ContactFormModel, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
