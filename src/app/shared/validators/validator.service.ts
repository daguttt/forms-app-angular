import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public fullnamePattern: RegExp =
    /([^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+) ([^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+)/;

  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  cantBeDaguttt(control: FormControl) {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'daguttt') return { daguttt: true };
    return null;
  }

  areDifferentInputValues(
    firstInputName: string,
    secondInputName: string
  ): ValidatorFn {
    return (formControl: AbstractControl): ValidationErrors | null => {
      const firstInput = formControl.get(firstInputName) as FormControl;
      const secondInput = formControl.get(secondInputName) as FormControl;
      if (firstInput.value !== secondInput.value) {
        secondInput.setErrors({ areDifferentInputValues: true });
        return {
          areDifferentInputValues: true,
        };
      }
      secondInput.setErrors(null);
      return null;
    };
  }
}
