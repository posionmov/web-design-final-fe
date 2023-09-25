import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {VideosComponent} from "./videos/videos.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "videos", component: VideosComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
