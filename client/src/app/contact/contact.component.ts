import { Component, OnInit } from '@angular/core';
import {Contact} from "./contact";
import {DialogService} from "./services/dialog.service";
import {ContactService} from "./services/contact.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts =[];

  constructor(public dialog: DialogService,
              public contactService: ContactService) {}

  ngOnInit():void {
    this.reloadContacts();
  }

  addContact() {
    this.editAndSaveContact(null);
  }
  onEditContact(contact: Contact){
    this.editAndSaveContact(contact);
  }

  onDeleteContact(contact: Contact){
    this.contactService.deleteContact(contact).subscribe(data => this.reloadContacts());
  }

  onShowContactOnMap(contact: Contact){
    let fullAddress = contact.streetAddress + ', ' + contact.city;
    this.dialog.mapDialog(fullAddress);
  }

  private editAndSaveContact(contact) {
    this.dialog.contactDialog(contact).subscribe(contact => {
      if (contact) {
        this.contactService.saveContact(contact).subscribe(data => this.reloadContacts());
      }
    });
  }

  reloadContacts(){
    this.contactService.loadContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

}
