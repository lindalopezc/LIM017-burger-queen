import Product from "./product";

export default interface burguer extends Product
{
  type: string,
  cheese: number,
  egg: number
}
