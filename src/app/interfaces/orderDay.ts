import Product from "./product";

export default interface order {
  cliente: string,
  mesa: number,
  hora: Date,
  products: Product[]
}
