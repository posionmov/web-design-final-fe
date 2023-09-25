import {Component} from "@angular/core";

@Component({
  selector: 'contact',
  template: `
    <medium-element-block>
      <div class="contact-wrapper">
        <contact-form></contact-form>
        <contact-image></contact-image>
      </div>
    </medium-element-block>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
}

