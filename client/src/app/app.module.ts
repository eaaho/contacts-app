///<reference path="contact/services/device.service.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import 'hammerjs';
import 'lodash';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from "./app.component";
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactService } from "./contact/services/contact.service";
import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';
import { LocalStorageService } from "./contact/services/localstorage.service";
import { DialogService } from "./contact/services/dialog.service";
import { MapDialogComponent } from './map/map-dialog/map-dialog.component';
import { ContactApiService } from './contact/services/contact-api.service'
import { RouterModule } from "@angular/router";
import { LoginComponent } from './contact/user/login/login.component';
import { ContactComponent } from './contact/contact.component';
import { VibrationDirective } from './contact/utils/vibration.directive';
import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';
import { DeviceService } from "./contact/services/device.service";
import { HttpService } from "./contact/utils/http.service";
import { UserService } from "./contact/user/services/user.service";
import { UserApiService } from "./contact/user/services/user-api.service";
import { ConnectionBackend, RequestOptions, XHRBackend, HttpModule } from "@angular/http";
import { AuthenticationService } from "./contact/user/services/authentication.service";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarService } from "./toolbar/toolbar.service";
import { ContactCardComponent } from './contact/contact-card/contact-card.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { CovalentCommonModule, CovalentLoadingModule, CovalentStepsModule } from '@covalent/core';
import { MaterialComponentsModule } from "./material/material.module";


  const routes = [
    { path:'', redirectTo: 'login', pathMatch: 'full' },
    { path:'login', component: LoginComponent },
    { path: 'contact', component: ContactListComponent }
    ];

export function getHttp(backend: ConnectionBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDialogComponent,
    ContactListComponent,
    MapDialogComponent,
    LoginComponent,
    ContactComponent,
    VibrationDirective,
    ContactAddressPipe,
    ToolbarComponent,
    ContactCardComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    CovalentCommonModule,
    CovalentLoadingModule,
    CovalentStepsModule,
    HttpModule
  ],
  providers: [
    ContactService,
    LocalStorageService,
    DialogService,
    {
      provide: HttpService,
      useFactory: getHttp,
      deps: [XHRBackend, RequestOptions]
    },
    ContactApiService,
    UserService,
    UserApiService,
    AuthenticationService,
    ToolbarService,
    DeviceService],
  bootstrap: [AppComponent],
  entryComponents:[
    ContactDialogComponent,
    MapDialogComponent]
})

export class AppModule { }
