import { Injectable } from '@angular/core';
import {Contact} from "../contact-list/contact";
import {MdDialog, MdDialogRef} from "@angular/material";

@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) { }

  public contactDialog(contact?: Contact){

/*
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed();
*/
  }

  public mapDialog(address: string){
/*
    let dialogRef = this.dialog.open(MapDialogComponent);
    dialogRef.componentInstance.address = address;
    return dialogRef.afterClosed();
*/
  }
}
