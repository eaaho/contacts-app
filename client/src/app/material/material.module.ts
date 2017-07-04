import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdIconModule, MdCardModule, MdInputModule, MdDialogModule,
  MdListModule, MdToolbarModule, MdSidenavModule, MdDatepickerModule, MdNativeDateModule, MdSelectModule,
  MdTooltipModule, MdTabsModule, MdSnackBarModule
} from '@angular/material';

const modules = [
  MdButtonModule,
  MdIconModule,
  MdCardModule,
  MdInputModule,
  MdDialogModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSelectModule,
  MdTooltipModule,
  MdTabsModule,
  MdSnackBarModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialComponentsModule {
}
