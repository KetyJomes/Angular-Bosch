import { Component } from '@angular/core';
import MockComidas, {IComida} from './Comidas.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected comidas: IComida[] = []
  protected focusedfood?: IComida;

  constructor () {
    this.comidas = MockComidas;
  }

  onCardClick = (item: IComida) => {
    this.focusedfood = item
  }
}
