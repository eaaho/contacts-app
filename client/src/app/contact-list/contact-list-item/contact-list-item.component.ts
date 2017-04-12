import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from "../contact";


@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent {

  @Input() contact: Contact;
  @Output() edit: EventEmitter<Contact>;
  @Output() remove: EventEmitter<Contact>;
  @Output() showOnMap: EventEmitter<Contact>;

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
