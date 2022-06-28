import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  wrongEmail: string = '';
  wrongPassword: string = '';

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
    this.FirebaseService.login(this.form.value)
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



