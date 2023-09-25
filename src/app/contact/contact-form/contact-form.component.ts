import {Component} from "@angular/core";
import {ContactFormModel} from "./contact-form.model";

@Component({
  selector: 'contact-form',
  template: `
    <div class="container">
      <h1>Have a new project on the horizon?</h1>
      <form [formGroup]="model.formGroup" (ngSubmit)="onSubmit()">
        <div class="contact-form-container">

          <div class="field">
            <input id="first-name" type="text" formControlName="firstName" placeholder="First Name">
            <text-form-validation-warning [fieldName]="'First Name'"
                                          [group]="model.firstName"></text-form-validation-warning>
          </div>

          <div class="field">
            <input id="last-name" type="text" formControlName="lastName" placeholder="Last Name">
            <text-form-validation-warning [fieldName]="'Last Name'"
                                          [group]="model.lastName"></text-form-validation-warning>
          </div>

          <div class="field">
            <input id="phoneNumber" type="text" formControlName="phoneNumber" placeholder="Phone number">
            <text-form-validation-warning [fieldName]="'Phone number'"
                                          [group]="model.phoneNumber"></text-form-validation-warning>
          </div>

          <div class="field">
            <input id="email" type="text" formControlName="email" placeholder="Email">
            <text-form-validation-warning [fieldName]="'Email'"
                                          [group]="model.email"></text-form-validation-warning>
          </div>

          <div class="field">
            <textarea id="message" formControlName="message" maxlength="500" placeholder="Message"></textarea>
            <text-form-validation-warning [fieldName]="'Message'"
                                          [group]="model.message"></text-form-validation-warning>
          </div>
        </div>
        <button type="submit" [disabled]="!model.valid" class="submit-btn">Submit</button>
      </form>
    </div>
  `,
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  constructor(public model: ContactFormModel) {}

  onSubmit() {
    const submittedData = JSON.stringify(this.model.formGroup.value, null, 4);
    alert(`Submitted values: ${submittedData}`)
  }
}
