import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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
  isLoading: boolean;

  constructor(private userService: UserService, private router: Router) {
    this.isLoading = false;
  }

  ngOnInit() {
    this.user = new Operator();
  }

  onLogin() {
    this.isLoading = true;
    this.subscription = this.userService.login(this.user.userName, this.user.passWord)
      .finally(() => {
        this.isLoading = false
      })
      .subscribe(() => {
        this.router.navigate(['/contact']);
      });
  }
}
