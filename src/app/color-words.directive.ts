import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorWords]'
})
export class ColorWordsDirective {
  @HostBinding ('style.color') inputC;
  @HostBinding ('style.borderColor') inputBc;
  constructor() { }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  @HostListener ('keyup') enter(){
    this.inputC = this.getRandomColor();
    this.inputBc = this.getRandomColor();
  }
}
