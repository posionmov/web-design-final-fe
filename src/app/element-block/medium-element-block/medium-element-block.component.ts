import {Component} from "@angular/core";

@Component({
  selector: 'medium-element-block',
  template: `
    <div class="element-block">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./medium-element-block.component.css']
})
export class MediumElementBlockComponent {}
