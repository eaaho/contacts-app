import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";
import { Operator } from "../operator";
import { UserService } from "../services/user.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  subscription: Subscription;
  user: Operator;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user = new Operator();
  }

  onLogin(){

    this.subscription = this.userService.login(this.user.userName, this.user.passWord).subscribe(() =>
    {
      this.router.navigate(['/contact']);
    });
  }

}
