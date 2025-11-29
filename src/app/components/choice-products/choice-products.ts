import { Component } from '@angular/core';
import {ChoiceItogService} from '../../services/choice-itog-service';
import {CurrencyPipe} from '../../pipes/currency-pipe';

@Component({
  selector: 'choice-products',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './choice-products.html',
  styleUrl: './choice-products.scss',
})
export class ChoiceProducts {
  constructor(public trash:ChoiceItogService) {
  }
}
