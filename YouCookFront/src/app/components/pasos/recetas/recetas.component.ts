import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.router.navigate(['proceso/pago']);
  }
  prevPage(){
    this.router.navigate(['proceso/plan']);
  }
  handleClick(event:Event){
    console.log(event)
  }
}
