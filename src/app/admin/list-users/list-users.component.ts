import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users!:any

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
  openDialogToUpdate(product: any, updateValue: any ){

  }
}
