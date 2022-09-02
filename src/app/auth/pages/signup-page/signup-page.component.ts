import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
})
export class SignupPageComponent implements OnInit {
  fullnamePattern: RegExp =
    /([^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+) ([^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+)/;

  signupForm: FormGroup = this.fb.group({
    fullname: [
      '',
      [Validators.required, Validators.pattern(this.fullnamePattern)],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

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
