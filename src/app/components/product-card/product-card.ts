import {Component, Input,EventEmitter, Output} from '@angular/core';
import {ButtonChoice} from "../../directives/button-choice";
import {CurrencyPipe} from "../../pipes/currency-pipe";
import {MacaroonType} from '../../types/macaroon.type';
import {ChoiceItogService} from '../../services/choice-itog-service';


@Component({
  selector: 'product-card',
    imports: [
        ButtonChoice,
        CurrencyPipe
    ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input('currentProduct') currentProduct: MacaroonType ={ image: 'string',caption: '', price_kol:0,price_sum:0};
  @Input('orderElement') orderElement: HTMLElement | null  = null;
  @Input('productNumber') productNumber: number =0;

  @Output('ppChoice') productChoice = new EventEmitter();

  constructor(public trash:ChoiceItogService) {
  }

  protected choiceMacaroon(): void {
    this.trash.addChoice(this.currentProduct.price_sum);
    if (this.orderElement) {
       this.orderElement.scrollIntoView({behavior: "smooth"});
    }
    this.productChoice.emit(this.currentProduct.caption);
  }

}
