import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { UserFirebaseService } from 'src/app/services/user-firebase.service';
import { sidebarData } from './sidebar-data';
import { Router } from '@angular/router';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar-waiter',
  templateUrl: './sidebar-waiter.component.html',
  styleUrls: ['./sidebar-waiter.component.scss'],
  animations:[
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
        style({opacity:1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
        style({opacity:0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform:'rotate(0deg', offset:'0'}),
          style({transform:'rotate(2turn', offset:'1'}),
        ]
        ))
      ])
    ])
  ]
})

export class SidebarWaiterComponent implements OnInit {
  @Output() ontoggleSideNav: EventEmitter<SideNavToggle>= new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = sidebarData;

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }
  closeSidenav(): void{
    this.collapsed = false;
    this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  signOut(event: Event){
    this.UserFirebaseService.signOut()
    .then(()=>{
      this.router.navigate(['/login']);
    })
  }

  constructor(private UserFirebaseService: UserFirebaseService, private router: Router) { }

}
