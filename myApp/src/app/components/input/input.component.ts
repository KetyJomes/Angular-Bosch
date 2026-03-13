import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  isDigit: string =  "";
  @Output()
    Digit: EventEmitter<void> = new EventEmitter();
  
  @Input()
    label: string = "";
    digit = () => {
      this.Digit.emit();
    }
}
