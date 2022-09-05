import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validators/validator.service';
import {
  cantBeDaguttt,
  emailPattern,
  fullnamePattern,
} from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
})
export class SignupPageComponent implements OnInit {
  signupForm: FormGroup = this.fb.group(
    {
      fullname: [
        '',
        // [Validators.required, Validators.pattern(fullnamePattern)],
        [Validators.required, Validators.pattern(this.valServ.fullnamePattern)],
      ],
      email: [
        '',
        // * [Validators.required, Validators.email, -> Kind of worse
        // [Validators.required, Validators.pattern(emailPattern)],
        [Validators.required, Validators.pattern(this.valServ.emailPattern)],
      ],
      username: [
        '',
        // [Validators.required, Validators.pattern(cantBeDaguttt)],
        [Validators.required, this.valServ.cantBeDaguttt],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        this.valServ.areDifferentInputValues('password', 'confirmPassword'),
      ],
    }
  );

  constructor(private fb: FormBuilder, private valServ: ValidatorService) {}

  ngOnInit(): void {
    this.signupForm.reset({
      fullname: 'Daniel Gutiérrez',
      email: 'dagutmu667@gmail.com',
      username: 'dagutsin',
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
