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
      {
        id: 2,
        title: 'Halo Infinite',
      },
    ],
  };

  newFavoriteGame: string = '';

  @ViewChild('form') form!: NgForm;

  constructor() {}

  removeDynamicInput(inputIndex: number): void {
    // Tutorial's way
    // this.personModel.favorites.splice(inputIndex, 1)
    // -**********************************-
    // My way
    this.personModel.favorites = this.personModel.favorites.filter(
      (_, index) => index != inputIndex
    );
  }

  addNewFavoriteGame() {
    this.personModel.favorites.push({
      id: this.personModel.favorites.length + 1,
      title: this.newFavoriteGame,
    });
    this.newFavoriteGame = '';
  }

  onSubmit() {
    console.log('Form submitted!', this.form.value);
  }
}
