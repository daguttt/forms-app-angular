import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/sidemenu.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SidemenuComponent {
  public templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './template/basics',
    },
    {
      text: 'Dinámicos',
      route: './template/dynamics',
    },
    {
      text: 'Switches',
      route: './template/switches',
    },
  ];
  public reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './reactive/basics',
    },
    {
      text: 'Dinámicos',
      route: './reactive/dynamics',
    },
    {
      text: 'Switches',
      route: './reactive/switches',
    },
  ];
  public authMenu: MenuItem[] = [
    {
      text: 'Registro',
      route: './auth/signup',
    },
    {
      text: 'Iniciar sesión',
      route: './auth/login',
    },
  ];
}
