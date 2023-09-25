import {Component, Input} from "@angular/core";
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'text-form-validation-warning',
  template: `
    <div *ngIf="group.invalid && (group.dirty || group.touched)" class="alert alert-danger">
      <div *ngIf="group.errors?.['required']" class="error">
          {{fieldName}} is required.
      </div>
      <div *ngIf="group.errors?.['minlength']" class="error">
          {{fieldName}} must be at least 4 characters long.
      </div>
      <div *ngIf="group.errors?.['pattern']" class="error">
        {{fieldName}} is not valid.
      </div>
    </div>
  `,
  styleUrls: ['./text-form-field-error.component.css']
})
export class TextFormFieldErrorComponent {
  @Input() group: AbstractControl;
  @Input() fieldName: string;
}
