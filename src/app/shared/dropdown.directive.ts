import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class dropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggoleOpen() {
    this.isOpen = !this.isOpen;

  }
}
