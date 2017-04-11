import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Contact} from "./contact";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts;
  @Output() select: EventEmitter<Contact>;

  constructor(contactService: ContactService) {
    this.contacts = contactService.getContacts();

  }

  ngOnInit() {
  }

}
