import { Injectable } from '@angular/core';
import { Orders } from './orders';
@Injectable({
  providedIn: 'root',
})
export class OrderItemsService {
  //Data for Mock
  public PizzaOrderData: Orders[] = [
    {
      orderId: 1,
      customerName: 'Sandeep',
      nbrOfItemsOrdered: 1,
      totalAmount: 200,
      statusOfOrder: 1,
      deliveryAddress: 'Chennai',
      orderData: [{ itemName: 'Garlic Bread', itemPrice: 200 }],
    },
    {
      orderId: 2,
      customerName: 'Sandeep',
      nbrOfItemsOrdered: 2,
      totalAmount: 400,
      statusOfOrder: 2,
      deliveryAddress: 'Mumbai',
      orderData: [
        { itemName: 'Garlic Bread', itemPrice: 200 },
        { itemName: 'Chicken Fiesta', itemPrice: 200 },
      ],
    },
    {
      orderId: 3,
      customerName: 'Sandeep',
      nbrOfItemsOrdered: 3,
      totalAmount: 600,
      statusOfOrder: 3,
      deliveryAddress: 'Kolkata',
      orderData: [
        { itemName: 'Garlic Bread', itemPrice: 200 },
        { itemName: 'Veg extravaganza', itemPrice: 200 },
        { itemName: 'Chicken pizza', itemPrice: 200 },
      ],
    },
  ];

  constructor() {}
}
