import {Component, OnInit} from '@angular/core';
import {Contact} from "./contact-list/contact";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";

  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

    contacts: Contact[];

    constructor(public contactService: ContactService){
    }

    ngOnInit(): void{}

    addContact() {}
}
