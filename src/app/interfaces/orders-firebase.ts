import { Order } from "./order"

export default interface OrderFirebase {
  id?: string | undefined,
  Waiter: string,
  Client: string | null,
  Table: string | null,
  Date : string,
  Products: Order[],
  Status: string,
  Total: number
}
