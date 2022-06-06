import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  personas:number=1;
  recetas:number=1;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage(){
    this.router.navigate(['proceso/recetas']);
  }
}
