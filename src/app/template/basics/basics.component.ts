import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  @ViewChild('myForm') form!: NgForm;
  initialFormData = {
    product: null,
    price: 0,
    inventory: 0,
  };
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
  onSubmit() {
    this.form.resetForm({
      price: 0,
      inventory: 0,
    });
  }
}
