import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
// import { MatDialog } from '@angular/material/dialog';
// import { DialogElement } from '../angular-material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formReg!: FormGroup;

  constructor(
    private userService: FirebaseService,
    private router: Router,
    // public dialog: MatDialog,
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  wrongEmail !: string;
  wrongPassword !: string;

  onSubmit() {
    this.wrongPassword = '';
    this.wrongEmail = '';

    this.userService.login(this.formReg.value)
      .then(response => {
        const email: any = response.user.email;
        const userName : any = response.user.displayName;

        if(/waiter.bq.com/.test(email)){
          this.router.navigate(['/waiter/menu']);
          console.log('si pasó')
        }
        else if(/chef.bq.com/.test(email)){
          this.router.navigate(['/chef']);
        }
      })
      .catch(error => {

        if(error.code === 'auth/user-not-found'){
          this.wrongEmail = 'The email is not registered. Try again';
        }
        else if (error.code === 'auth/wrong-password'){
          this.wrongPassword = 'The password is not correct. Try again';
        }
        else{
          this.wrongEmail = error.code
        }
        this.formReg.reset();
      });
  }

  ngOnInit(): void {
  }
}



