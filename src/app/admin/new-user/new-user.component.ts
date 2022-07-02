import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserFirebaseService } from 'src/app/services/user-firebase.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(public dialogRef: MatDialogRef<NewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private UserFirebaseService: UserFirebaseService) {
      if(this.data.isUpdating!=="true" )
        this.data.user ={userId:'', userName:'', userType:'', userPassword:'', userEmail: ''};
     }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  createUser(name: string, email: string, password: string,  type: string){
    this.UserFirebaseService.register({name, email , password, type})
  }
  updateUser(){

    this.UserFirebaseService.updateUserFirestore(this.data.user.userId, this.data.user)
  }
}
