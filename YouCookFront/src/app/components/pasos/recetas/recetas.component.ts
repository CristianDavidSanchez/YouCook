import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { Pedido } from 'src/app/models/pedido.model';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  item:Pedido[]=[];
  cont:number=0;
  cont2:number=0;
  aux:any=null;
  buttonblock:boolean=false;
  products:any=[
    {
      id:0,
      nombre:"primera receta",
      descripcion : "Soy la primera receta",
      urlImagen : "https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418.jpeg"
    },
    {
      id:1,
      nombre:"primera receta",
      descripcion : "Soy la primera receta",
      urlImagen : "https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418.jpeg"
    },
    {
      id:2,
      nombre:"primera receta",
      descripcion : "Soy la primera receta",
      urlImagen : "https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418.jpeg"
    },
    {
      id:3,
      nombre:"primera receta",
      descripcion : "Soy la primera receta",
      urlImagen : "https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418.jpeg"
    },
    {
      id:4,
      nombre:"primera receta",
      descripcion : "Soy la primera receta",
      urlImagen : "https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418.jpeg"
    },
    {
      id:5,
      nombre:"primera receta",
      descripcion : "Soy la primera receta",
      urlImagen : "https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418.jpeg"
    },
    {
      id:5,
      nombre:"primera receta",
      descripcion : "Soy la primera receta",
      urlImagen : "https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418.jpeg"
    },
  ]
  constructor(private router: Router, private pedidosService:PedidosService) {
    this.cont=0;
    this.aux=this.pedidosService.getConfigData();
    this.cont2=this.aux.canR;
   }

  ngOnInit(): void {
    this.cont=0;
    this.aux=this.pedidosService.getConfigData();
    this.cont2=this.aux.canR;
  }
  nextPage(){
    this.pedidosService.setRecipes(this.item)
    this.router.navigate(['proceso/pago']);
  }
  prevPage(){
    this.router.navigate(['proceso/plan']);
  }
  handleClick(event: any){
    this.aux=this.pedidosService.getConfigData();
    this.cont=this.cont+1;
    this.cont2=this.cont2-1;
    if(this.aux.canR<=this.cont){
      this.buttonblock=true
    } 
    this.item.push(event)
  }
}
