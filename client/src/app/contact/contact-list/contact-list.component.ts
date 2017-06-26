import {Component, OnInit} from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../services/contact.service";
import {DialogService} from "../services/dialog.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  contacts =[];

  constructor(public dialog: DialogService,
              public contactService: ContactService) {}

  ngOnInit():void {
    this.reloadContacts();
  }

  addContact() {
    this.editAndSaveContact(null);
  }
  editContact(contact: Contact){
    this.editAndSaveContact(contact);
  }

  removeContact(contact: Contact){
    this.contactService.deleteContact(contact).subscribe(data => this.reloadContacts());
  }

  showContactOnMap(contact: Contact){
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
