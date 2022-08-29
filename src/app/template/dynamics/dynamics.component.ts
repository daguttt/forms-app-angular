import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  title: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent {
  personModel: Person = {
    name: 'Daniel',
    favorites: [
      {
        id: 1,
        title: 'FH5',
      },
    ],
  };

  @ViewChild('form') form!: NgForm;

  constructor() {}

  onSubmit() {
    console.log('Form submitted!', this.form.value);
  }
}
