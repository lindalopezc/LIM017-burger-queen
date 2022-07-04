import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
 private orderSummary: Order[] = [];

 getOrderSummary (){
  return this.orderSummary;
 }

 addOrder(order: Order){
  this.orderSummary.push(order);
 }

 increaseProduct(index: number):void{
  this.orderSummary[index].count++;
 }

 decreaseProduct(index: number){
  if(this.orderSummary[index].count > 0){
    this.orderSummary[index].count--;
  }
 }

 deleteOneOrder(index: number){
  return this.orderSummary.splice(index, 1)
 }

 clearOrderSummary(){
  this.orderSummary = [];
 }

}
