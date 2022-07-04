import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Product from 'src/app/interfaces/product';
import { ProductFirebaseService } from 'src/app/services/product-firebase.service';
import { NewProductComponent } from '../new-product/new-product.component';

@Component({
  selector: 'app-list-products-admin',
  templateUrl: './list-products-admin.component.html',
  styleUrls: ['./list-products-admin.component.scss']
})
export class ListProductsAdminComponent implements OnInit {
  products!: Product[];
  newProduct: Product = {name:'', url:'',  price:0, type:'', cheese:0, egg:0};

  constructor(private productFirebase: ProductFirebaseService, public dialog: MatDialog) {

  }


  ngOnInit(): void {

      this.productFirebase.getProducts().subscribe((products)=>{
        this.products = products
      })

  }
  deleteProductAdmin(product: Product){
    this.productFirebase.deleteProduct(product);
  }

  openDialogToUpdate(product: Product, isUpdating: string){
    const dialogRef = this.dialog.open(NewProductComponent, {
      width: '250px',
      data: {product, isUpdating: isUpdating},
    });
   dialogRef.afterClosed().subscribe(result=>{
    });
  }
  openDialogToCreateProduct(){
    const dialogRef = this.dialog.open(NewProductComponent, {
      width: '250px',
      data: this.newProduct,
    });
  }
}
