import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MdSidenav, MdSnackBar } from "@angular/material";
import { NavigationEnd, Router } from "@angular/router";
import * as _ from 'lodash';
import { HttpService } from "./contact/utils/http.service";
import { DialogService } from "./contact/services/dialog.service";

  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })

export class AppComponent implements OnInit{

    toolbarVisible: boolean;
    logoutCancelled: boolean;
    sidenavMode: string;

    @ViewChild('sideNav') sideNav: MdSidenav;

    @HostListener('window:resize', ['$event'])
    onWindowResize(event) {
      let width = event ? event.target.innerWidth : window.innerWidth;
      this.sidenavMode = width >= 600 ? 'side' : 'over';
      let element = document.getElementById('main-container');
      element.style.height = 'auto';
      element.style.minHeight = '0';
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event) {
      if (this.http.hasTokenBeenAcquired() && !this.http.tokenExist() && !(this.router.url === '/login'))
        {
          this.toolbarVisible = false;
          this.router.navigate(['/login']);
        }
    }

    constructor(public router: Router, public snackBar: MdSnackBar, public http: HttpService, public dialog: DialogService){
      this.toolbarVisible = true;
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login'))
          {
            this.toolbarVisible = false;
            this.router.navigate(['/login']);
          } else {
            this.toolbarVisible = true;
          }
        }
      });
    }

    logout(){
      let snackBarRef = this.snackBar.open('You will be logged out.', 'CANCEL', {duration: 2000});
      snackBarRef.onAction().subscribe(() => {
        this.logoutCancelled = true;
        snackBarRef.dismiss();
      });

      snackBarRef.afterDismissed().subscribe(() => {
        if (!this.logoutCancelled) {
          this.logoutCancelled = false;
          this.http.deleteToken();
          this.router.navigate(['/login']);
        }
      });
      this.logoutCancelled = false;
    }

    toggle() {
      this.sideNav.toggle(!this.sideNav._isOpened);
    }


    ngOnInit():void {
      this.onWindowResize(null);
    }

}
