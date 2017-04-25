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
  width: number;
  height: number;

  constructor(public sanitizer: DomSanitizer) { }

  bypassSecTrustResUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.url = 'https://www.google.com/maps?output=embed&q=' + this.fullAddress;
    this.onWindowResize();
  }

  @HostListener('window.resize',['$event'])
    onWindowResize(){
      let compWidth = document.body.clientWidth;
      let compHeight = window.innerHeight;
      this.width = Math.min(compWidth * 0.6, 600);
      this.height = Math.min(compHeight * 0.75, 480);
    }

}
