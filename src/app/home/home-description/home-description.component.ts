import {Component} from "@angular/core";

@Component({
  selector: 'home-description',
  template: `
    <medium-element-block>
      <div class="main-container">
        <div class="text-side-container">
          <h1>Transforming Moments into Masterpieces: Our Video Editing Company</h1>
          <p>Welcome to our world of cinematic artistry, where every frame tells a story and every moment becomes a masterpiece.
            We are Videomakers, a leading video editing company dedicated to turning your raw footage into captivating, visually stunning narratives</p>
          <route-button [routeOnClick]="'contact'"
                        [text]="'Interested? Contact us!'"></route-button>
        </div>

        <div class="image-side-container">
          <img alt="desc_1" src="../../../assets/description/description-1.jpg">
          <img alt="desc_2" src="../../../assets/description/description-2.jpg">
        </div>
      </div>
    </medium-element-block>
  `,
  styleUrls: ['./home-description.component.css']
})
export class HomeDescriptionComponent {}
