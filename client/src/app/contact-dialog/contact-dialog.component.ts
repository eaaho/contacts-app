import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact-list/contact";
import {MdDialogRef} from "@angular/material";


@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html'})

export class ContactDialogComponent implements OnInit {

  dialogRef;
  contact: Contact;
  isValid: boolean;

  constructor(dialogRef: MdDialogRef<ContactDialogComponent>) {
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {
    if(!this.contact) {
      this.contact = new Contact();
    }
    this.validate();
  }

  add(){
    this.dialogRef.close(this.contact);
  }

  validate() {
    this.isValid = !!(this.contact.firstName && this.contact.lastName);
  }

  cancel(){
    this.dialogRef.close();
  }

}
