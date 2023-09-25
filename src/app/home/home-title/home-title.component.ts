import {Component} from "@angular/core";

@Component({
  selector: 'home-title',
  template: `
    <medium-element-block>
      <div class="home-title">
        <h1>We create your memories</h1>
        <p>Discover why video is the ultimate tool for branding and lead generation.</p>
      </div>
    </medium-element-block>
  `,
  styleUrls: ['./home-title.component.css']
})
export class HomeTitleComponent {}
