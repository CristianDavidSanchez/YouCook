import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Pedido } from 'src/app/models/pedido.model';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css'],
  providers: [MessageService]
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

  constructor(private router: Router, private pedidosService:PedidosService,private messageService: MessageService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    let auxConfig=this.pedidosService.getConfigData();
    this.totalPedido=auxConfig.total;
    this.primengConfig.ripple = true;
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
  confirmar(){
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
  }
  onConfirm(){
    this.messageService.clear();
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Tu PQR ha sido enviada con éxito'});
    this.nextPage();
  }
  onReject(){
    this.messageService.clear();
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Tu mensaje no ha sido enviado'});
  }
}
