import { Component } from '@angular/core';
import {Contact} from "./contact-list/contact";
import {ContactService} from "./services/contact.service";


  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

    contacts: Contact[];

    constructor(contactService: ContactService){
      this.contacts = contactService.findContacts();
    }
}
