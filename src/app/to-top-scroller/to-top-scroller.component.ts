import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'to-top-scroller',
  template: `
    <div class="to-top"
         (click)="scrollToTop()"
         [ngClass]="{ 'show-scrollTop': windowScrolled }">
      <div class="arrow"></div>
    </div>
  `,
  styleUrls: ['./to-top-scroller.component.css']
})
export class ToTopScrollerComponent implements OnInit {

  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => this.windowScrolled = window.scrollY >= 70);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
