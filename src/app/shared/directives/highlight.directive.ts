import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.elemetRef.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.elemetRef.nativeElement.style.backgroundColor = '';
  }
  constructor(
    private elemetRef: ElementRef
  ) {
    //this.elemetRef.nativeElement.style.backgroundColor = 'transparent';
   }

}
