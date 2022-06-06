import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css']
})
export class ProcesoComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [{
          label: 'plan',
          routerLink: 'plan'
      },
      {
          label: 'recetas',
          routerLink: 'recetas',
      },
      {
          label: 'Pago',
          routerLink: 'pago'
      },
    ];
    }

}
