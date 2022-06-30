import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users!:any
  user!: any;

  constructor(private firebaseService: FirebaseService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.firebaseService.getUsers().subscribe((usersFirestore)=>{
      console.log(usersFirestore)
      this.users=usersFirestore;
    })
  }
  deleteUser(user: any){
    this.firebaseService.deleteUserFirestore(user);
  }

  openDialogToUpdateUser(user: any, updateValue: any ){
    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '250px',
      data: {user, isUpdating: updateValue},
    });
   dialogRef.afterClosed().subscribe(result=>{
    });
  }
  openDialogToCreateUser(){

    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '50%',
      data: {user: this.user},
    });
  }
}
