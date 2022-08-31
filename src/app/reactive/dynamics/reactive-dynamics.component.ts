import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './reactive-dynamics.component.html',
  styles: [],
})
export class ReactiveDynamicsComponent implements OnInit {
  personForm: FormGroup = this.fb.group({
    name: [''],
    favorites: this.fb.array(
      [[''], ['', Validators.required]],
      Validators.required
    ),
  });

  get favorites() {
    return this.personForm.controls['favorites'] as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.personForm.reset({
      name: 'Daniel',
      favorites: ['', 'Halo Infinite'],
    });
  }

  isInputValid(inputName: string) {
    const input = this.personForm.controls[inputName];
    return input.errors && input.touched;
  }

  onSubmit() {
    if (this.personForm.invalid) {
      this.personForm.markAllAsTouched();
      return;
    }
    console.log(this.personForm.value);
    this.personForm.reset();
  }
}
