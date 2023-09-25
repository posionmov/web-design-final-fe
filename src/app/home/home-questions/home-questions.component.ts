import {Component} from "@angular/core";

@Component({
  selector: 'home-questions',
  template: `
    <medium-element-block>
      <div class="home-questions-container">
        <h1>Still have question related to our products?</h1>
        <h3>Want to get best offer and got most fastest and greatest video in all time?</h3>
        <div class="home-questions-button-container">
          <route-button [routeOnClick]="'contact'"
                        [text]="'Contact us!'"></route-button>
        </div>
      </div>
    </medium-element-block>
  `,
  styleUrls: ['./home-questions.component.css']
})
export class HomeQuestionsComponent {}
