import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './modules/material.module';
import { OrdersDataComponent } from './orders-data/orders-data.component';
import { ItemsDataComponent } from './items-data/items-data.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersDataComponent,
    ItemsDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
