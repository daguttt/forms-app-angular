import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form submitted!', this.form.value);
  }
}
