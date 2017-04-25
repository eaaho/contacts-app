import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MaterialRootModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ContactService,
    LocalStorageService,
    DialogService,
    HttpModule,
    ContactApiService],
  bootstrap: [AppComponent],
  entryComponents:[
    ContactDialogComponent,
    MapDialogComponent]
})

export class AppModule { }
