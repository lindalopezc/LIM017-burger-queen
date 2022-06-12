import Product from "./product";

export default interface hamburguesa extends Product
{
  type: string,
  cheese: number,
  egg: number
}
