import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  personas:number=1;
  recetas:number=1;
  total:number=0;
  constructor(private router: Router, private pedidosService:PedidosService) { }

  ngOnInit(): void {
  }

  nextPage(){
    this.total=this.personas*this.recetas*10000;
    this.pedidosService.setConfigData(this.personas,this.recetas,this.total)
    this.router.navigate(['proceso/recetas']);
  }
}
