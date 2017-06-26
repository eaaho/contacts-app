import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {

  @Input() contact: Contact;
  @Output() edit: EventEmitter<Contact> = new EventEmitter();
  @Output() remove: EventEmitter<Contact> = new EventEmitter();
  @Output() showOnMap: EventEmitter<Contact> = new EventEmitter();

  constructor() {}

  editContact() {
    this.edit.emit(this.contact);
  }

  removeContact() {
    this.remove.emit(this.contact);
  }

  showContactOnMap() {
    this.showOnMap.emit(this.contact);
  }
}
