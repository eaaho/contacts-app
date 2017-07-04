import { Injectable } from '@angular/core';
import { ConnectionBackend, Http, RequestOptions, RequestOptionsArgs, Response, Headers, Request } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpService extends Http {

  private authHeaderName: string = 'Authorization';
  private authHeaderBearerPrefix: string = 'Bearer ';
  private authToken: string;
  private firstLogin: boolean;

  constructor(backend: ConnectionBackend, private defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
    this.firstLogin = false;
  }
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set(this.authHeaderName, this.authHeaderBearerPrefix + this.authToken);
    } else {
      url.headers.set(this.authHeaderName, this.authHeaderBearerPrefix + this.authToken);
    }
    return this.intercept(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs, skipInterceptor?: boolean): Observable<Response> {
    if (skipInterceptor) {
      return super.get(url, options);
    }
    return this.intercept(super.get(url, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs, skipInterceptor?: boolean): Observable<Response> {
    if (skipInterceptor) {
      return super.post(url, body, options);
    }
    return this.intercept(super.post(url, body, options));
  }

  saveToken(token: string) {
    this.authToken = token;
    this.firstLogin = true;
  }

  deleteToken(){
    this.authToken = null;
  }

  tokenExist(){
    if (this.authToken == null){
      return (false);
    } else {
      return (true);
    }
  }

  hasTokenBeenAcquired(){
    return this.firstLogin;
  }

  private intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((error: Response) => {
      if (error.status == 401) {
        console.log(error.status + ' ' + error.statusText);
      }
      return Observable.throw(error);
    });
  }

}
