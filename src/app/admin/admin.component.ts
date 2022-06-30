import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  constructor(private authFirebase: FirebaseService, private router: Router) {}

  ngOnInit(): void {
  }

  signOut(event: Event){
    this.authFirebase.signOut()
    .then(()=>{
      console.log('sign out exit')
      this.router.navigate(['/login']);
    })
    .catch((error)=> console.log(error));
  }

}
