import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[AutoFucusOnError]'
})
export class AutofucusonerrorDirective {

  constructor(private ele: ElementRef) { }

  @HostListener('submit')
  OnSubmit() {
    let error = this.ele.nativeElement.querySelector('.ng-invalid');
    if (error) {
      error.focus();
    }
  }

}
