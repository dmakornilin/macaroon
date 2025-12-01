import { Component } from '@angular/core';
import {ChoiceItogService} from '../../services/choice-itog-service';
import {CurrencyPipe} from '@angular/common';
import {CurrencyPipeRub} from '../../pipes/currency-pipe';

@Component({
  selector: 'choice-products',
  imports: [
    CurrencyPipe,
    CurrencyPipeRub
  ],
  templateUrl: './choice-products.html',
  styleUrl: './choice-products.scss',
})
export class ChoiceProducts {
  constructor(public trash:ChoiceItogService) {
  }
}
