// import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

  let component: LoginComponent;

  beforeEach(()=>{{
    component = new LoginComponent();
  }})
  // let fixture: ComponentFixture<LoginComponent>;
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ LoginComponent ]
  //   })
  //   .compileComponents();
  // });

  it('should initialize the instance', () => {

    // fixture = TestBed.createComponent(LoginComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    // let email = component.form.controls['email'];
    // let password = component.form.controls['password'];
    // email.setValue('');
    // password.setValue('');
    // expect(component.form.invalid).toBeTruthy();

    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(LoginComponent);
    expect(component.wrongEmail.length).toBe(0);
    expect(component.wrongEmail.length).toBe(0);
  });
});
