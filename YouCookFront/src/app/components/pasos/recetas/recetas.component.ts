import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.router.navigate(['proceso/pago']);
  }
  prevPage(){
    this.router.navigate(['proceso/plan']);
  }
}
