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
  constructor(private productFirebase: ProductFirebaseService, public dialog: MatDialog) { }

  ngOnInit(): void {

      this.productFirebase.getProducts().subscribe((products)=>{
        console.log(products)
        this.products = products
      })

  }
  deleteProductAdmin(product: Product){
    this.productFirebase.deleteProduct(product);
  }

  openDialogToUpdate(product: Product, isUpdating: string){
    console.log(product)
    const dialogRef = this.dialog.open(NewProductComponent, {
      width: '250px',
      data: {product, isUpdating: isUpdating},
    });
   dialogRef.afterClosed().subscribe(result=>{
    });
  }

}
