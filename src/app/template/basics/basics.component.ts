import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') form!: NgForm;
  constructor() {}

  ngOnInit(): void {}

  isProductValid(): boolean {
    return (
      this.form?.controls['product']?.invalid &&
      this.form?.controls['product']?.touched
    );
  }
  isPriceValid(): boolean {
    return (
      this.form?.controls['price']?.value < 0 &&
      this.form?.controls['price']?.touched
    );
  }
  lookAtNgForm() {
    console.log(this.form);
  }
}
