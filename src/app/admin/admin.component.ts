import { Component, OnInit } from '@angular/core';
import Product from '../interfaces/product';
import { MatDialog } from '@angular/material/dialog';
import { NewProductComponent } from './new-product/new-product.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  newProduct: Product = {name:'', url:'',  price:0, type:'', cheese:0, egg:0};
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

openDialogToCreateProduct(){
    const dialogRef = this.dialog.open(NewProductComponent, {
      width: '50%',
      data: this.newProduct,
    });
  }
}
