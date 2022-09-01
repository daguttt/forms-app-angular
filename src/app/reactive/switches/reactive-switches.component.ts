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

    // * Update 'this.person' when values change
    this.form.valueChanges.subscribe((form) => {
      const { termsAndConditions, ...personProperties } = form;
      this.person = personProperties;
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    console.log('Submitting form...', this.form.value);
    //🆒 Way to do it
    // * Update 'this.person' when submitting
    const { termsAndConditions, ...personProperties } = this.form.value;
    this.person = personProperties;
  }
}
