import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
 private orderSummary: Order[] = [];

 addOrder(order: Order){
  this.orderSummary.push(order);
 }

 increaseProduct(index: number){
  this.orderSummary[index].count++;
  return this.orderSummary;
 }
 decreaseProduct(index: number){
  if(this.orderSummary[index].count>0)
    this.orderSummary[index].count--;
 }

 getOrderSummary (){
  return this.orderSummary;
 }

 deleteOneOrder(index: number){
  return this.orderSummary.splice(index, 1)
 }

 clearOrderSummary(){
  this.orderSummary = [];
 }
}
