import { Directive, HostListener } from '@angular/core';
import { DeviceService } from "../services/device.service";

@Directive({
  selector: '[appVibration]'
})
export class VibrationDirective {

  constructor(private device: DeviceService) { }

  @HostListener('click', ['$event'])

  onClick(){
    navigator.vibrate([500]);
  }

}
