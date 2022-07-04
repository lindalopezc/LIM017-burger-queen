// import { resolveForwardRef } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserFirebaseService } from '../services/user-firebase.service';
// import { LoginComponent } from './login.component';

// fdescribe('LoginComponent', () => {

//   let component: LoginComponent;
//   let userFirebaseSpy: jasmine.SpyObj<UserFirebaseService>;
//   let fixture: ComponentFixture<LoginComponent>;

//   const firebaseServiceStub = {
//     login({emailUser, passwordUser}:any): Promise<any>{
//       return new Promise ((resolve) =>{
//         resolve({
//           user: {
//             email: emailUser,
//             password: passwordUser,
//           }
//         })
//       })
//     }
//   }

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginComponent ],
//       providers: [ { provide: UserFirebaseService, useValue: firebaseServiceStub }]
//     })
//     .compileComponents();
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();

//     userFirebaseSpy = TestBed.inject(UserFirebaseService) as jasmine.SpyObj<UserFirebaseService>;
//   });

//   it('should initialize the instance', () => {
//     expect(component).toBeTruthy();
//     expect(component).toBeInstanceOf(LoginComponent);
//     expect(component.wrongEmail.length).toBe(0);
//     expect(component.wrongEmail.length).toBe(0);
//   });
// });
