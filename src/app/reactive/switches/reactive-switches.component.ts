import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './reactive-switches.component.html',
  styles: [],
})
export class ReactiveSwitchesComponent implements OnInit {
  form: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [false, Validators.required],
    termsAndConditions: [true, Validators.requiredTrue],
  });

  person = {
    gender: 'F',
    notifications: true,
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.reset({
      ...this.person,
      termsAndConditions: false,
    });
  }
}
