import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private firebaseService: FirebaseService,
    private router: Router) {}

  ngOnInit(): void {
  }
  signOut(event:Event){
    this.firebaseService.signOut()
    .then(()=>{
      this.router.navigate(['/login']);
    })
    .catch((error)=> console.log(error));
  }
}
