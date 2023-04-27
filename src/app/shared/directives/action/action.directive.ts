/* import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[appAction]'
})
export class ActionDirective {
    @Output() public appAction: EventEmitter<Event> = new EventEmitter();

    @HostListener('click', ['$event'])
    public handleClick(event: Event): void{
        console.log('caiu aqui click: ', event)
        this.appAction.emit(event);
    }

    @HostListener('keyup', ['$event'])
    public handleKeyUp(event: KeyboardEvent): void{
        console.log('caiu aqui keyup: ', event)
        this.appAction.emit(event);
    }
} */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAction]'
})
export class ActionDirective {
  @Output() public appAction: EventEmitter<Event> = new EventEmitter();

  @HostListener('click', ['$event'])
  public handleClick(event: Event): void {
    this.appAction.emit(event);
  }

  @HostListener('keyup', ['$event'])
  public handleKeyUp(event: KeyboardEvent): void {
    this.appAction.emit(event);
  }
}