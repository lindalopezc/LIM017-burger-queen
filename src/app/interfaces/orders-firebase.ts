import { Order } from "./order"

export default interface OrderFirebase {
  id?: string | undefined,
  Waiter: string,
  Client: string | null,
  Table: string | null,
  Date : Date,
  Products: Order[],
  Status: string,
  Total: number,
  Timer :number,
}
