///<reference path="contact/services/device.service.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import { MaterialRootModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from "./app.component";
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactService } from "./contact/services/contact.service";
import { ContactListItemComponent } from "./contact/contact-list/contact-list-item/contact-list-item.component";
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

  const routes = [{
      path:'',
      redirectTo: 'login',
      pathMatch: 'full'
    },{
      path:'login',
      component: LoginComponent
    },{
      path: 'contact',
      component: ContactComponent
    }];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
    LoginComponent,
    ContactComponent,
    VibrationDirective,
    ContactAddressPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialRootModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ContactService,
    LocalStorageService,
    DialogService,
    HttpService,
    ContactApiService,
    UserService,
    UserApiService,
    DeviceService],
  bootstrap: [AppComponent],
  entryComponents:[
    ContactDialogComponent,
    MapDialogComponent]
})

export class AppModule { }
