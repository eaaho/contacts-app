import {Component, HostListener, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {

  url: string;
  fullAddress: string;

  constructor(public sanitizer: DomSanitizer) { }

  bypassSecTrustResUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngOnInit() {
    this.url = 'https://www.google.com/maps?output=embed&q=' + this.fullAddress;
  }

}
