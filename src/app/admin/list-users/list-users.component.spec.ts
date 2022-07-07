import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { UserFirebaseService } from 'src/app/services/user-firebase.service';
import { ListUsersComponent } from './list-users.component';

describe('ListUsersComponent', () => {
  let fixture: ComponentFixture<ListUsersComponent>;
  let component: ListUsersComponent;
  let matDialogSpy : jasmine.SpyObj<MatDialog>;
  let usersArray = [
    { name:'linda', job: 'waiter', email: 'linda@gmail.com' },
    { name:'jaqueline', job: 'waiter', email: 'ja@gmail.com' }
  ];
  class userFirebaseSpy {
    getUsers(): Observable<any[]>{
      return of(usersArray);
    };
    deleteUserFirestore(user:any){
      return 'user deleted';
    }
  };

  beforeEach(waitForAsync( () => {
    matDialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ],
      providers: [
        { provide: UserFirebaseService, useClass: userFirebaseSpy },
        { provide: MatDialog, useValue: matDialogSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
     expect(component).toBeDefined();
  });

  it('should return an array with two users', () => {
    expect(component.user).toBe(undefined);
    expect(component.users.length).toBe(2);
  })

  it('should delete one user', () => {
    const user = { name:'linda', job: 'waiter', email: 'linda@gmail.com' };
    expect(component.deleteUser(user)).toBe('user deleted');
  })

  it('should open the dialog for create user', () =>{
    component.openDialogToCreateUser();
    expect(matDialogSpy.open).toHaveBeenCalled();
  })
  it('should open the dialog for update user', () =>{
    component.openDialogToUpdateUser('user', 'update');
    expect(matDialogSpy.open).toHaveBeenCalled();
  })

});
