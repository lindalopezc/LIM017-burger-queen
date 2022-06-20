export default interface OrderFirebase {
  Mesero: string,
  Cliente: string | null,
  Mesa: string | null,
  Fecha : string,
  Hamburguesas: object, Acompanamientos: object, Bebidas: object, total: number
}
