import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './reactive-basics.component.html',
  styles: [],
})
export class ReactiveBasicsComponent implements OnInit {
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

  ngOnInit(): void {
    // ! With .setValue() we need to pass ALL properties
    // this.myForm.setValue({
    //   product: 'RTX 3090ti',
    //   price: 3000,
    //   stock: 2
    // }) -> !
    this.myForm.reset({
      product: 'RTX 3090ti',
      price: 3000,
    });
  }

  isInputValid(inputName: string) {
    const input = this.myForm.controls[inputName];
    return input.errors && input.touched;
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
