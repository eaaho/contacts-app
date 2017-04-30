import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MdSidenav, MdSnackBar} from "@angular/material";
import {NavigationEnd, Router} from "@angular/router";
import * as _ from 'lodash';

  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })

export class AppComponent implements OnInit{

    toolbarVisible: boolean;
    sidenavMode: string;
    snackBar: MdSnackBar;

    @ViewChild('sideNav') sideNav: MdSidenav;


    @HostListener('window:resize', ['$event'])
    onWindowResize(event) {
      let width = event ? event.target.innerWidth : window.innerWidth;
      this.sidenavMode = width >= 600 ? 'side' : 'over';
    }

    constructor(public router: Router){
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login'))
          {
            this.toolbarVisible = false;
          } else {
            this.toolbarVisible = true;
          }
        }
      });
    }

    toggle() {
      this.sideNav.toggle(!this.sideNav._isOpened);
    }

    logout(){
 //     let snackBarRef = this.snackBar.open('You will be logged out.', 'CANCEL', {duration: 2500});
      this.router.navigate(['/login']);
    }

    ngOnInit():void {
      this.onWindowResize(null);
    }

}
