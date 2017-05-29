import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import { Operator } from "../operator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Operator;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.user = new Operator();
  }

  onLogin(){
    let navigationExtras : NavigationExtras = {
      preserveQueryParams: true,
      preserveFragment: true
    };

    this.router.navigate(['/contact'], navigationExtras);
  }

}
