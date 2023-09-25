import {Component} from "@angular/core";

@Component({
  selector: 'home',
  template: `
    <div class="home-container">
      <home-title></home-title>
      <home-description></home-description>
      <to-top-scroller></to-top-scroller>
      <faq></faq>
      <home-questions></home-questions>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
