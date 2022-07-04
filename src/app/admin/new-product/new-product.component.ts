import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { getDownloadURL, list, listAll, ref, Storage, uploadBytes} from '@angular/fire/storage';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductFirebaseService } from 'src/app/services/product-firebase.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})

export class NewProductComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productFirebase: ProductFirebaseService,
    private storage: Storage
  ) {
      if(this.data.isUpdating!=="true" )
        this.data.product ={ name:'', url:'',  price:0, type:'', cheese:0, egg:0 };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  createProduct(){
    this.productFirebase.createProduct(this.data.product);
  }

  updateProductAdmin(){
    this.productFirebase.updateProduct(this.data.product.id, this.data.product)
  }

  title: string = 'angular-material-file-upload-app';

  @ViewChild('UploadFileInput') uploadFileInput!: ElementRef;

  fileName = '';
  async fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {

      const fileImg = fileInput.target.files[0];
      const imgRef = ref(this.storage, `images/${fileImg.name}`)

      await uploadBytes(imgRef, fileImg);
      this.fileName = '';
      Array.from(fileInput.target.files).forEach((file: any) => {
        this.fileName  += file.name;
      });
      await getDownloadURL(imgRef)
      .then(url => this.data.product.url = url);
      this.uploadFileInput.nativeElement.value = ""; // Reset File Input to Selct Same file again
    } else {
      this.fileName = 'Select File';
    }
  }

  getImages(){
    const imgRef = ref(this.storage, `images`);
    listAll(imgRef)
    .then(async (images) => {
     for(let image of images.items){
      const url = await getDownloadURL(image);
     }
    })
    .catch(error => console.log(error));
  }
}
