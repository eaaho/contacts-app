import {
  AfterViewInit, Component, OnInit, Output, EventEmitter,
  ViewChildren, QueryList, ElementRef
  } from '@angular/core';
import { ToolbarProperties, ToolbarService } from "./toolbar.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, AfterViewInit {

  @Output() toggleSidenav: EventEmitter<any>;
  toolbarProperties: ToolbarProperties;
  searchActivated: boolean;

  @ViewChildren('search') search: QueryList<any>;

  constructor(private toolbar: ToolbarService, private location: Location) {
    this.toggleSidenav = new EventEmitter();
    this.toolbarProperties = toolbar.defaultProperties;
    this.searchActivated = false;
  }

  ngOnInit() {
    this.toolbar.propertiesChanged.subscribe((properties: ToolbarProperties) => {
      this.toolbarProperties = properties;
    });
  }

  ngAfterViewInit(): void {
    this.search.changes.subscribe(query => {
      let searchInput: ElementRef = query.first;
      if(searchInput){
        setTimeout(function(){
          searchInput.nativeElement.focus();
        });
      }
    })
  }

  toggleSearch(activated){
    this.searchActivated = activated;
    if(!this.searchActivated){
      this.toolbarProperties.searchText = '';
      this.searchTextChanged();
    }
  }

  navigateBack() {
    this.location.back();
  }

  searchTextChanged() {
    this.toolbar.changed();
  }

}
