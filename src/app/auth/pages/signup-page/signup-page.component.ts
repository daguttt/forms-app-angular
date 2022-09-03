import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
})
export class SignupPageComponent implements OnInit {
  fullnamePattern: RegExp =
    /([^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+) ([^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+)/;

  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  signupForm: FormGroup = this.fb.group({
    fullname: [
      '',
      [Validators.required, Validators.pattern(this.fullnamePattern)],
    ],
    email: [
      '',
      // * [Validators.required, Validators.email, -> Kind of worse
      [Validators.required, Validators.pattern(this.emailPattern)],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm.reset({
      fullname: 'Daniel Gutiérrez',
      email: 'dagutmu667@gmail.com',
    });
  }

  isInputValid(inputName: string): boolean | undefined {
    return (
      this.signupForm.get(inputName)?.invalid &&
      this.signupForm.get(inputName)?.touched
    );
  }

  onSubmit(): void {
    console.log(this.signupForm.value);
    this.signupForm.markAllAsTouched();
  }
}