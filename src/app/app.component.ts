import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="root-element">
      <nav-toolbar></nav-toolbar>
      <div class="router-outlet">
        <router-outlet></router-outlet>
      </div>
      <footer-component></footer-component>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final_exam';
}
