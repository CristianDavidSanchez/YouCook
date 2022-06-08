import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido.model';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  totalPedido: string='';
  pedido:Pedido={
    numPersonas: '',
    cantRecetasSemana: '',
    correo: '',
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    total:'',
    numTarjeta:'',
    cvv: '',
    expiracion: '',
    itemsPedido:[],
  }

  constructor(private router: Router, private pedidosService:PedidosService) { }

  ngOnInit(): void {
    let auxConfig=this.pedidosService.getConfigData();
    this.totalPedido=auxConfig.total;
  }
  nextPage(){
    let auxConfig=this.pedidosService.getConfigData();
    this.totalPedido=auxConfig.total;
    this.pedido.numPersonas=auxConfig.numP;
    this.pedido.cantRecetasSemana=auxConfig.canR;
    this.pedido.itemsPedido=this.pedidosService.getRecipes();
    this.router.navigate(['/']);
  }
  prevPage(){
    this.router.navigate(['proceso/recetas']);
  }
}
