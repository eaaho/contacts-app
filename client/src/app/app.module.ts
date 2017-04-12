import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from "./app.component";
import { ContactListComponent } from './contact-list/contact-list.component';
import {ContactService} from "./services/contact.service";
import {ContactListItemComponent} from "./contact-list/contact-list-item/contact-list-item.component";
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
