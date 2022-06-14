import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { sidebarData } from './sidebar-data';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar-waiter',
  templateUrl: './sidebar-waiter.component.html',
  styleUrls: ['./sidebar-waiter.component.scss']
})
export class SidebarWaiterComponent implements OnInit {
  @Output() ontoggleSideNav: EventEmitter<SideNavToggle>= new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = sidebarData;

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }
  closeSidenav(): void{
    this.collapsed = false;
    this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

}
