import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersDataComponent} from './orders-data/orders-data.component';
import { ItemsDataComponent} from './items-data/items-data.component'


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/orders'
  },
{
  path:'orders',
  component:OrdersDataComponent
},
{
  path:'items/:orderId',
  component:ItemsDataComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
