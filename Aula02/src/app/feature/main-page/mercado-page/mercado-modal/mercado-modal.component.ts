import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMercado } from '../Mercado.mock';

@Component({
  selector: 'app-mercado-modal',
  templateUrl: './mercado-modal.component.html',
  styleUrls: ['./mercado-modal.component.css']
})
export class MercadoModalComponent {
  @Input()
  item?: IMercado
  @Output()
  onClose: EventEmitter<void> = new EventEmitter<void>();

  toggleClose = () => {
      this.onClose.emit();
    }
}
