import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable()
export class ContactFormModel {

  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})$"),
    ]),
    message: new FormControl('', [Validators.required]),
  });

  get firstName() {
    return this.getFormGroup('firstName')
  }

  get lastName() {
    return this.getFormGroup('lastName')
  }

  get phoneNumber() {
    return this.getFormGroup('phoneNumber')
  }

  get email() {
    return this.getFormGroup('email')
  }

  get message() {
    return this.getFormGroup('message')
  }

  get valid() {
    return this.formGroup.valid
  }

  getFormGroup(path: string | string[]): FormGroup {
    return this.formGroup.get(path) as FormGroup;
  }
}
