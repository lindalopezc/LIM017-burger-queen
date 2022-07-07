import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import Product from 'src/app/interfaces/product';
import { ProductFirebaseService } from 'src/app/services/product-firebase.service';
import { ListProductsAdminComponent } from './list-products-admin.component';

describe('ListUsersComponent', () => {
  let fixture: ComponentFixture<ListProductsAdminComponent>;
  let component: ListProductsAdminComponent;
  let matDialogSpy : jasmine.SpyObj<MatDialog>;
  let usersArray: Product[] = [
    {name:'burger', url:'',  price:20, type:'', cheese:0, egg:0},
    {name:'soda', url:'',  price:10, type:'', cheese:0, egg:0}
  ];
  class ProductFirebaseServiceSpy {
    getProducts(): Observable<any[]>{
      return of(usersArray);
    };
    deleteProduct(product: Product){
      return 'product deleted';
    }
  };

  beforeEach(waitForAsync( () => {
    matDialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [ ListProductsAdminComponent ],
      providers: [
        { provide: ProductFirebaseService, useClass: ProductFirebaseServiceSpy },
        { provide: MatDialog, useValue: matDialogSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
     expect(component).toBeDefined();
  });

  it('should return an array with two products', () => {
    expect(component.newProduct).toBeDefined();
    expect(component.products.length).toBe(2);
  })

  it('should delete one product', () => {
    const product: Product = {name:'burger', url:'',  price: 10, type:'simple', cheese:0, egg:0};
    expect(component.deleteProductAdmin(product)).toBe('product deleted');
  })

  it('should open the dialog for create product', () =>{
    component.openDialogToCreateProduct();
    expect(matDialogSpy.open).toHaveBeenCalled();
  })
  it('should open the dialog for update product', () =>{
    const product = {name:'burger', url:'',  price: 10, type:'simple', cheese:0, egg:0};
    component.openDialogToUpdate(product, 'update');
    expect(matDialogSpy.open).toHaveBeenCalled();
  })

});
