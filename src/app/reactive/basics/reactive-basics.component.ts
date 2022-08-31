import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    product: ['RTX 3090ti'],
    price: [1500],
    stock: [4],
  });
  constructor(private formBuilder: FormBuilder) {}
}
