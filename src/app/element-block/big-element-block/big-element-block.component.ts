import {Component} from "@angular/core";

@Component({
  selector: 'big-element-block',
  template: `
    <div class="element-block">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./big-element-block.component.css']
})
export class BigElementBlockComponent {}
