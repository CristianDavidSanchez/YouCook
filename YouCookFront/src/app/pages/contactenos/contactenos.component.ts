import { Component, OnInit } from '@angular/core';
import {MessageService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css'],
  providers: [MessageService]
})
export class ContactenosComponent implements OnInit {
  options: any;
  constructor(private messageService: MessageService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
  };
  }
  confirmar(){
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
  }
  onConfirm(){
    this.messageService.clear();
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Tu PQR ha sido enviada con éxito'});
  }
  onReject(){
    this.messageService.clear();
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Tu mensaje no ha sido enviado'});
  }
}
