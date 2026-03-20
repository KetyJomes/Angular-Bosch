import { Component} from '@angular/core';
import MockMercados, { IMercado } from 'src/app/feature/main-page/mercado-page/Mercado.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  protected mercados: IMercado[] = []

  constructor () {
    this.mercados = MockMercados;
   
  }
  focusedMarket?: IMercado;

  onCardClick(market: IMercado) {
    this.focusedMarket = market;
  }

}
