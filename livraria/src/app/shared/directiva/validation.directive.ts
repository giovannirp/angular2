import { Directive, Renderer2, ElementRef, Input, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective {

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private control: NgControl
  ) { }

  @Input() showSuccess: boolean | null;
  @HostListener('blur') onblur() { this.validate(); }

  private validate() {
    if (this.shouldShowErrors()) {
      if (this.showSuccess) {
        this.renderer.removeClass(this.hostElement.nativeElement, 'is-valid');
      }
      this.renderer.addClass(this.hostElement.nativeElement, 'is-invalid');
    } else {
      if (this.showSuccess) {
        this.renderer.addClass(this.hostElement.nativeElement, 'is-valid');
      }
      this.renderer.removeClass(this.hostElement.nativeElement, 'is-invalid');
    }
  }



  private shouldShowErrors(): boolean {
    return this.control && this.control.errors && this.control.touched;
  }

}
