import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Operator } from "../operator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Operator;

  constructor(private router: Router) {
    this.user = new Operator();
  }

  ngOnInit() {
  }

  onLogin(){
    this.router.navigate(['/contact']);
  }

}
