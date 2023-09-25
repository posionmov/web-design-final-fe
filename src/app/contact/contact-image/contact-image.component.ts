import {Component} from "@angular/core";

@Component({
  selector: 'contact-image',
  template: `
    <div class="image-wrapper">
      <img alt="contactUs" src="../../../assets/contact/contact-us.jpg">
    </div>
  `,
  styleUrls: ['./contact-image.component.css']
})
export class ContactImageComponent {
}

