import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { environment } from "../../../../environments/environment";
import { AuthenticationService } from "./authentication.service";
import { UserApiService } from "./user-api.service";

@Injectable()
export class UserService {

  constructor(private auth: AuthenticationService, private userApiService: UserApiService) { }

  login(username: string, password: string) {
    if (environment.endPointUrl) {
      return this.auth.authenticate(username, password).flatMap(() => {
        return this.userApiService.login();
      });
    } else {
      return Observable.of(null);
    }
  }
}
