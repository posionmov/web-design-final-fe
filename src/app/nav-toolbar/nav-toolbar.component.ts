import {Component, OnDestroy} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {Subscription} from "rxjs";
import {NavLink} from "./nav-toolbar.service";

@Component({
  selector: 'nav-toolbar',
  template: `
    <nav class="nav-toolbar">
      <ul class="toolbar">
        <ng-container *ngFor="let link of links">
          <toolbar-link [title]="link.title" [routeLink]="link.routeLink" [isSelected]="link.selected"></toolbar-link>
        </ng-container>
      </ul>
      <nav-weather></nav-weather>
    </nav>
  `,
  styleUrls: ['./nav-toolbar.component.css']
})
export class NavToolbarComponent implements OnDestroy {

  links: NavLink[] = [
    {title: "Home", routeLink: "/", selected: false},
    {title: "Portfolio", routeLink: "/portfolio", selected: false},
    {title: "Videos", routeLink: "/videos", selected: false},
    {title: "About", routeLink: "/about", selected: false},
    {title: "Contact us", routeLink: "/contact", selected: false}
  ]

  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router) {
    this.subscriptions.add(
      router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      ).subscribe(event => {
        const navigationEndEvent = event as NavigationEnd;
        const path = navigationEndEvent.url.split('?')[0]
        this.links.map(link => link.selected = link.routeLink === path)
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
