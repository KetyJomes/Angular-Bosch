import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from '../Comidas.mock';

@Component({
  selector: 'app-comida-modal',
  templateUrl: './comida-modal.component.html',
  styleUrls: ['./comida-modal.component.css']
})
export class ComidaModalComponent {
    @Input()
    item?: IComida
    @Output()
    onClose: EventEmitter<void> = new EventEmitter<void>();

    toggleClose = () => {
      this.onClose.emit();
    }
  
}
