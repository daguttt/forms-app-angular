import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  personModel = {
    gender: 'F',
    notifications: true,
  };

  termsAndConditions: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
