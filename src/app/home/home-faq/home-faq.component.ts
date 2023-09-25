import {Component} from "@angular/core";
import {FAQ_ELEMENTS} from "./home-faq.service";

@Component({
  selector: 'faq',
  template: `
    <medium-element-block>
      <h1 class="faq-title">Our Expertise</h1>
      <div class="faq-block">
        <ng-container *ngFor="let elem of FAQ_ELEMENTS">
          <faq-element [buttonName]="elem.name"
                       [description]="elem.description"></faq-element>
        </ng-container>
      </div>
    </medium-element-block>
  `,
  styleUrls: ['./home-faq.component.css']
})
export class FaqComponent {
  protected readonly FAQ_ELEMENTS = FAQ_ELEMENTS;
}
