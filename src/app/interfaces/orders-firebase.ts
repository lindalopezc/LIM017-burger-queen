export default interface OrderFirebase {
  Waiter: string,
  Client: string | null,
  Table: string | null,
  Date : string,
  Burguers: object,
  Accompaniments: object,
  Beverages: object,
  Total: number
}
