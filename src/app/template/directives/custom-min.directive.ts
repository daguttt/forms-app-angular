import { Directive, ElementRef, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[customMin][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CustomMinDirective, multi: true },
  ],
})
export class CustomMinDirective implements Validator {
  @Input() minimum!: number;
  constructor() {}
  // validate(control: FormControl): ValidationErrors | null {
  validate(control: AbstractControl): ValidationErrors | null {
    console.log({ controlValue: control.value, minimum: this.minimum });
    const inputValue = control.value;
    return inputValue < this.minimum
      ? {
          customMin: true,
        }
      : null;
  }
}
