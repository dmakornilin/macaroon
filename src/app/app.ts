// noinspection JSDeprecatedSymbols

import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MacaroonType} from './types/macaroon.type';
import {AdvType} from './types/adv.type';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, NgForOf,NgIf, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('macaroons');

  public showPresent: boolean = false;
  public advantages: AdvType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  public macaroons: MacaroonType[] = [
    {image: 'mcr1.png', caption: 'Макарун с малиной', price_kol: 1, price_sum: '1,70 руб' },
    {image: 'mcr2.png', caption: 'Макарун с манго', price_kol: 1, price_sum:  '1,70 руб'},
    {image: 'mcr3.png', caption: 'Пирог с ванилью', price_kol: 1, price_sum:  '1,70 руб'},
    {image: 'mcr4.png', caption: 'Пирог с фисташками', price_kol:1, price_sum:  '1,70 руб'},
  ];


  public formValues ={
    productTitle:'', err_choice:false,
    name:'', err_name:false,
    phone:'', err_phone:false,
    is_error: false,
    form_show:true,
    popup_show:false
  }

  public scrollTo(target:HTMLElement):void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public choiceMacaroon(mcr:MacaroonType,target:HTMLElement):void {
    this.scrollTo(target);
    this.formValues.productTitle=mcr.caption.toUpperCase();
  }

  public createOrder():void {
    this.formValues.form_show=true;
    this.formValues.popup_show=false;
    this.formValues.err_choice=false;
    this.formValues.err_name=false;
    this.formValues.err_phone=false;
    this.formValues.is_error=false;

    if (!this.formValues.productTitle) {
      this.formValues.err_choice=true; this.formValues.is_error=true;
    }
    if (!this.formValues.name) {
      this.formValues.err_name=true; this.formValues.is_error=true;
    }
    if (!this.formValues.phone) {
      this.formValues.err_phone=true; this.formValues.is_error=true;
    }

    if (!this.formValues.is_error) {
      this.formValues.form_show=false;
      this.formValues.popup_show=true;
    }
  }
}
