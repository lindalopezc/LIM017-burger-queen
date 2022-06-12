import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarChefComponent } from './sidebar-chef.component';

describe('SidebarChefComponent', () => {
  let component: SidebarChefComponent;
  let fixture: ComponentFixture<SidebarChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
