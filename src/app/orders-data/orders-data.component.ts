import { Component, OnInit } from '@angular/core';
import {Orders} from './../orders';
import {OrderItemsService} from './../order-items-service.service'

@Component({
  selector: 'app-orders-data',
  templateUrl: './orders-data.component.html',
  styleUrls: ['./orders-data.component.scss']
})
export class OrdersDataComponent implements OnInit {
  displayedColumns: string[] = ['orderId','customerName','nbrOfItemsOrdered','totalAmount','statusOfOrder','changeStatus']
  //columns that will be displayed on screen for angular material table
  orderStatus:any={1:'Order Recieved',2:'Preparing',3:'Ready To Serve'} //using object to store status mapping
  dataSource : Orders[];
  constructor(private orderItemsService:OrderItemsService) { 
    this.dataSource=this.orderItemsService.PizzaOrderData
    
  }

  ngOnInit(): void {
  }
  modifyStatus(orderId)
  {
    //get the order id for which the change in status needs to be done, once we find the correct order id data,
    //we update the status to next one by adding 1 to last status
    for( let i=0;i<=this.orderItemsService.PizzaOrderData.length;i++)
    {
      if(this.orderItemsService.PizzaOrderData[i].orderId===orderId)
      {
        this.orderItemsService.PizzaOrderData[i].statusOfOrder=this.orderItemsService.PizzaOrderData[i].statusOfOrder+1
        break;
      }
    }
  }

}




