import {Component, ElementRef, ViewChild} from "@angular/core";
import {PortfolioImage} from "./portfolio.service";

@Component({
  selector: 'portfolio',
  template: `
    <big-element-block>
      <div id="carousel" class="carousel">
        <div class="slides">
          <ng-container *ngFor="let slide of slides; let i = index">
            <div class="img-container slide {{slide.state}}">
              <img alt="img-{{i}}" src="{{slide.imageUrl}}">
            </div>
            <div class="description {{slide.state}}">
              <p>{{slide.description}}</p>
            </div>
          </ng-container>
        </div>
        <div class="indicators">
          <ng-container *ngFor="let slide of slides; let dataRowIndex = index">
            <input class="indicator {{slide.state}}"
                   name="indicator"
                   (click)="switchSlide(dataRowIndex)"
                   [defaultChecked]="slide.state === 'active'" type="radio"/>
          </ng-container>
        </div>
      </div>
    </big-element-block>
  `,
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  @ViewChild("carousel") linkComponent: ElementRef;

  slides: PortfolioImage[] = [
    {imageUrl: "../../assets/portfolio/portfolio-1.jpg", state: "active", description: "Girl and phone"},
    {imageUrl: "../../assets/portfolio/portfolio-2.jpg", state: "inactive", description: "Shadow"},
    {imageUrl: "../../assets/portfolio/portfolio-3.jpg", state: "inactive", description: "Cameraman 1"},
    {imageUrl: "../../assets/portfolio/portfolio-4.jpg", state: "inactive", description: "Cameraman 2"},
    {imageUrl: "../../assets/portfolio/portfolio-5.jpg", state: "inactive", description: "Cameraman 3"},
    {imageUrl: "../../assets/portfolio/portfolio-6.jpg", state: "inactive", description: "Beach and cam"},
    {imageUrl: "../../assets/portfolio/portfolio-7.jpg", state: "inactive", description: "Group of peoples"},
  ]

  switchSlide(i: number) {
    this.slides.map(
      (slide, index) => slide.state = index === i ? "active" : "inactive")
  }
}
