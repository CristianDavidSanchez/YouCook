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
      nombre:"Patacones con pollo",
      descripcion : "Plátano macho, Pechuga de pollo de corral, Aguacate, Cebolla, Tomate kumato, Cilantro fresco, Especias tex-mex (Está compuesta de comino, cayena, cilantro, pimentón dulce y sal.)",
      urlImagen : "https://cdn.shopify.com/s/files/1/0781/6149/products/ad622a201b4c46fda8f44beba4aaec91_233f7d0b-dcfe-4aa2-9b54-1c9e354802cc_512x512.jpg?v=1646042388"
    },
{
      id:1,
      nombre:"(Veggie) Tofu tandoori con verduras",
      descripcion : "Una forma diferente de tomar coliflor y...¡un sabor inigualable! Alucina con las propiedades saciantes y cardio protectoras del la leche de coco, y la jugosidad que aporta al tofu, fuente de calcio, hierro y proteínas completas de origen vegetal.",
      urlImagen : "https://cdn.shopify.com/s/files/1/0781/6149/products/76547df1f0943759a37a57b37ac25d1_6692283f-e8b4-40f5-a058-835ab66c8c7e_512x512.jpg?v=1589199847"
    },
    {
      id:2,
      nombre:"(Low carb) Pizza 4 quesos",
      descripcion : "Pizza cuatro quesos para toda la familia. Un plato clásico en su versión casera, que está cargado de proteínas y calcio, importantes para el correcto desarrollo muscular y óseo de los mas pequeños de la casa",
      urlImagen : "https://cdn.shopify.com/s/files/1/0781/6149/products/258498a6057148d99c1985477793c5af_440e4c0d-bb75-4860-91b6-b1c2f895e8dd_512x512.jpg?v=1605519680"
    },
    {
      id:3,
      nombre:"Crepes de espinacas",
      descripcion : "Unos crepes diferentes y doblemente nutritivos. Gracias a la harina integral de sarraceno y las espinacas, es una receta muy rica en fibra que ayuda al tránsito intestinal.",
      urlImagen : "https://cdn.shopify.com/s/files/1/0781/6149/products/5ee5e13820aa4b698b18133040447355_512x512.jpg?v=1653994516"
    },
    {
      id:4,
      nombre:"Fajitas de cerdo",
      descripcion : "¡Os traemos el relleno de las fajitas como nunca antes lo habías visto! En versión baja en hidratos pero con el sabor de siempre.",
      urlImagen : "https://cdn.shopify.com/s/files/1/0781/6149/products/7eed01b87d3e480f89656a104de83790_8dcaeb7b-0cb0-4136-a55e-44986d6bb5db_512x512.jpg?v=1645262433"
    },
    {
      id:5,
      nombre:"Chile de lentejas",
      descripcion : "En este guiso mexicano combinamos las legumbres y cereales, aportando así todos los aminoácidos para conseguir la proteína vegetal completa",
      urlImagen : "https://cdn.shopify.com/s/files/1/0781/6149/products/971e9edd73ab4da598fe2f3824249c46_512x512.jpg?v=1645267881"
    },
    {
      id:6,
      nombre:"Gnocchis keto con pesto de albahaca",
      descripcion : "¿Eres fan de la comida italiana pero te preocupan los carbohidratos? Nos hemos marcado un recetón cambiando la patata y harina por coliflor, queso y harina de almendras.",
      urlImagen : "https://cdn.shopify.com/s/files/1/0781/6149/products/5e579f3bfdcb4cc6b383fd7a00a39d2b_512x512.jpg?v=1653995855"
    },
    {
      id:7,
      nombre:"(Veggie) Nachos de boniato",
      descripcion : "Vas a alucinar con estos nachos, no volverás a probar otros. Es una receta diferente, rica en proteínas de calidad, minerales y fibra, que ayudan a mantener los músculos y el sistema circulatorio en perfectas condiciones.",
      urlImagen : "https://cdn.shopify.com/s/files/1/0781/6149/products/28364d13dfcf407099bf3123d20870f2_868e87c8-8065-4721-a5f9-496d5c3b4b1b_512x512.jpg?v=1645523409"
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
