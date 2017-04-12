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

    contacts =[];

    constructor(public contactService: ContactService,
                public dialog: DialogService){}

    ngOnInit(): void{}

    addContact() {
      this.editAndSaveContact(null);
    }
    onEditContact(contact: Contact){
      this.editAndSaveContact(contact);
    }

    onDeleteContact(contact: Contact){
      this.contactService.deleteContact(contact);
      this.reloadContacts();
    }

    onShowContactOnMap(contact: Contact){
      let fullAddress = contact.streetAddress + ', ' + contact.city;
    }

    reloadContacts(){
      this.contacts = this.contactService.findAllContacts();
    }

    private editAndSaveContact(contact) {
      this.dialog.contactDialog(contact).subscribe(contact => {
        if (contact) {
          this.contactService.saveContact(contact);
          this.reloadContacts();
        }
      });
    }
}
