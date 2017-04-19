import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialRootModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from "./app.component";
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from "./services/contact.service";
import { ContactListItemComponent } from "./contact-list/contact-list-item/contact-list-item.component";
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { LocalStorageService } from "./services/localstorage.service";
import { DialogService } from "./services/dialog.service";
import { MapDialogComponent } from './map/map-dialog/map-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialRootModule,
    FlexLayoutModule
  ],
  providers: [ContactService, LocalStorageService, DialogService],
  bootstrap: [AppComponent],
  entryComponents:[ContactDialogComponent, MapDialogComponent]
})

export class AppModule { }
