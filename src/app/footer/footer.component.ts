import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  template: `
    <footer>
      <div class="footer-wrapper">
        <p>{{date |  date: 'yyyy'}} Sergei Galanov</p>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  date: Date = new Date()
}
