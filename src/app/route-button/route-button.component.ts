import {Component, Input} from "@angular/core";

@Component({
  selector: 'route-button',
  template: `
    <button class="scroll-button"
            [routerLink]="[routeOnClick]">
      {{text}}
    </button>
  `,
  styleUrls: ['./route-button.component.css']
})
export class RouteButtonComponent {

  @Input() text: string;
  @Input() routeOnClick: string;
}
