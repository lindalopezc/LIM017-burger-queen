import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup } from '@angular/forms';
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>>>>>>> e3de697ba36d0b218784c128c88145646ab03db9
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
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

=======
  form: FormGroup = new FormGroup({});
>>>>>>> e3de697ba36d0b218784c128c88145646ab03db9
  wrongEmail !: string;
  wrongPassword !: string;

  constructor(
    private FirebaseService: FirebaseService,
    private router: Router,
    private formLogin: FormBuilder,
  ) {
    this.form = this.formLogin.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.wrongPassword = '';
    this.wrongEmail = '';

    this.FirebaseService.login(this.form.value)
      .then(response => {
        const email: any = response.user.email;

        if(/waiter.bq.com/.test(email)){
          this.router.navigate(['/waiter/menu']);
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
        this.form.reset();
      });
  }

  ngOnInit(): void {
  }
}



