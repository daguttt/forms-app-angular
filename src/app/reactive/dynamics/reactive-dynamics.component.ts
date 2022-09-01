import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './reactive-dynamics.component.html',
  styles: [],
})
export class ReactiveDynamicsComponent implements OnInit {
  personForm: FormGroup = this.fb.group({
    name: [''],
    favorites: this.fb.array(
      [
        ['', Validators.required],
        ['', Validators.required],
      ],
      Validators.required
    ),
  });

  newFavoriteControl: FormControl = this.fb.control('', Validators.required);

  get favorites() {
    return this.personForm.controls['favorites'] as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.personForm.reset({
      name: 'Daniel',
      favorites: ['FH5', 'Halo Infinite'],
    });
  }

  isInputValid(inputName: string) {
    const input = this.personForm.controls[inputName];
    return input.errors && input.touched;
  }

  addNewFavoriteGame() {
    if (this.newFavoriteControl.invalid) return;
    this.favorites.push(
      this.fb.control(this.newFavoriteControl.value, Validators.required)
    );
    this.newFavoriteControl.reset();
  }

  onSubmit() {
    console.log('Submitting');
    if (this.personForm.invalid) {
      this.personForm.markAllAsTouched();
      return;
    }
    console.log(this.personForm.value);
    this.personForm.reset();
  }
}
