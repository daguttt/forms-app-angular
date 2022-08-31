import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './reactive-basics.component.html',
  styles: [],
})
export class ReactiveBasicsComponent {
  myForm: FormGroup = new FormGroup({
    product: new FormControl('RTX 3090ti'),
  });
  constructor() {}
}
