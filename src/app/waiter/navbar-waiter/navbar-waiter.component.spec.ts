import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWaiterComponent } from './navbar-waiter.component';

describe('NavbarWaiterComponent', () => {
  let component: NavbarWaiterComponent;
  let fixture: ComponentFixture<NavbarWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarWaiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
