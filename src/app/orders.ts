//creating model for orders
import { Items }from './items';
 export interface Orders {
    orderId:number;
    customerName: string;
    nbrOfItemsOrdered: number;
    totalAmount: number;
    statusOfOrder: number;
    deliveryAddress:string;
    orderData:Items[]
  }