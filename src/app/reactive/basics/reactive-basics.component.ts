import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './reactive-basics.component.html',
  styles: [],
})
export class ReactiveBasicsComponent {
  // myForm: FormGroup = new FormGroup({
  //   product: new FormControl('RTX 3090ti'),
  //   price: new FormControl(1500),
  //   stock: new FormControl(4),
  // });
  myForm: FormGroup = this.formBuilder.group({
    product: [null, [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required, Validators.min(0)]],
    stock: [null, [Validators.required, Validators.min(0)]],
  });
  constructor(private formBuilder: FormBuilder) {}

  isInputValid(inputName: string) {
    const input = this.myForm.controls[inputName];
    return input.errors && input.touched;
  }
}
