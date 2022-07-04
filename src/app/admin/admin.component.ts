import { Component, OnInit } from '@angular/core';
import { UserFirebaseService } from '../services/user-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private authFirebase: UserFirebaseService, private router: Router) {}

  ngOnInit(): void {
  }

  signOut(event: Event){
    this.authFirebase.signOut()
    .then(()=>{
      this.router.navigate(['/login']);
    })
  }

}
