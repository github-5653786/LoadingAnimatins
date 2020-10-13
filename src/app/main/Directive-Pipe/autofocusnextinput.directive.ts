import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Autofocusnextinput]'
})
export class AutofocusnextinputDirective {

  @Input() maxlength: any;

  constructor(private ele: ElementRef) { }

  @HostListener('input')
  OnEnter() {

    let len = this.ele.nativeElement.value ? this.ele.nativeElement.value.length : 0;

    if (Number(this.maxlength) == len) {
      const focusNextId = this.ele.nativeElement.getAttribute("Autofocusnextinput");
      const focusNextEle = focusNextId ? document.getElementById(focusNextId) : '';
      if (focusNextEle) {
        focusNextEle.focus();
      }
    }
  }

}
