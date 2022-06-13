export interface Product{
  name:string, url:string, price:number, type:string, count: number, queso:number, huevo:number
}
export interface Orden{
  Mesero: string, Cliente: string, Mesa: number, Fecha : string, Hamburguesas: object, Acompanamientos: object, Bebidas: object,
}
