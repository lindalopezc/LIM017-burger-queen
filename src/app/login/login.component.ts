import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
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
    private userService: UserService,
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

  onSubmit() { //login
    this.userService.login(this.formReg.value)
      .then(response => {
        const email: any = response.user.email;
        const userName : any = response.user.displayName;

        if(/waiter.bq.com/.test(email)){
          this.router.navigate(['/waiter/menu']);
        }
        else if(/chef.bq.com/.test(email)){
          this.router.navigate(['/chef']);
        }
        else{
          //aquí iría la ruta del administrador
        }
        this.router.navigate(['/waiter/menu']);
      })
      .catch(error => {
        if(error.code = 'auth/user-not-found'){
          this.wrongPassword='';
          this.wrongEmail = 'The email is not registered. Try again';
        }
        else if (error.code = 'auth/wrong-password'){
          this.wrongEmail = '';
          this.wrongPassword = 'The password is not correct. Try again';
        }
        else{
          this.wrongEmail = error.code
          this.wrongPassword = '';
        }
      });
  }

  ngOnInit(): void {
  }
}



