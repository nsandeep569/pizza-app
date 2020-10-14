import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Orders } from '../orders';
import { OrderItemsService } from './../order-items-service.service';

@Component({
  selector: 'app-items-data',
  templateUrl: './items-data.component.html',
  styleUrls: ['./items-data.component.scss'],
})
export class ItemsDataComponent implements OnInit {
  currentOrderData:Orders;
  totalAmount:number=0;
  displayedColumns: string[] = ['itemName','itemPrice']
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderItemsService: OrderItemsService
  ) {}

  ngOnInit(): void {
    //get the order id from route params and store the items data
    this.route.params.subscribe((data) => {
      console.log(data.orderId);
      console.log(this.orderItemsService.PizzaOrderData)
      this.currentOrderData=
        this.orderItemsService.PizzaOrderData.filter(
          (orderData) => orderData.orderId == data.orderId
        )[0] // get the only order that represents that particular orderid
        this.totalAmount=this.currentOrderData.orderData.map(eachItem=>eachItem.itemPrice).reduce((total,currentPrice)=>total+currentPrice)// get the total price of all items
    });
  }
}
