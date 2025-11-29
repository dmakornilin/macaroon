import { Injectable } from '@angular/core';
import {MacaroonType} from '../types/macaroon.type';

@Injectable()
export class ProdListService {

  getMacaroons():MacaroonType[]{
    let result:MacaroonType[] = [
      {image: 'mcr1.png', caption: 'Макарун с малиной', price_kol: 1, price_sum: 1.7},
      {image: 'mcr2.png', caption: 'Макарун с манго', price_kol: 1, price_sum: 1.7},
      {image: 'mcr3.png', caption: 'Пирог с ванилью', price_kol: 1, price_sum: 1.7},
      {image: 'mcr4.png', caption: 'Пирог с фисташками', price_kol: 1, price_sum: 1.7},
    ];
    return result;
  }

}
