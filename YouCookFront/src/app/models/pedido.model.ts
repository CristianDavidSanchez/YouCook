export type Pedido = {
    numPersonas?: string,
    cantRecetasSemana?: string,
    correo?: string,
    nombre?: string,
    apellido?: string,
    direccion?: string,
    telefono?: string,
    total?:string,
    numTarjeta?: string,
    cvv?: string,
    expiracion?: string,
    itemsPedido?:Pedido[],
    id?: number
  }