import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido.model';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  numPersonas:string='';
  cantRecetasSemana:string='';
  total:string='';
  itemsPedido:Receta[]=[]

  constructor() { }
  setConfigData(numP:number,cantP:number,tot:number){
    this.numPersonas=numP.toString();
    this.cantRecetasSemana=cantP.toString();
    this.total=tot.toString();
  }
  getConfigData(){
    return {numP:this.numPersonas,canR:this.cantRecetasSemana,total:this.total}
  }
  setRecipes(items:Pedido[]){
    this.itemsPedido=items;
  }
  getRecipes(){
    return this.itemsPedido;
  }
}
