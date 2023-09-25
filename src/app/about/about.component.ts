import {Component} from "@angular/core";

@Component({
  selector: 'about',
  template: `
    <div class="about-container">
      <about-address></about-address>
    </div>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
}
