import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MacaroonType} from './types/macaroon.type';
import {AdvType} from './types/adv.type';
import {ProdListService} from './services/prod-list-service';
import {AdvListService} from './services/adv-list-service';
import {StrLeftNNPipe} from './pipes/str-left-nn-pipe-pipe';
import {Phone3Pipe} from './pipes/phone3-pipe';
import {ChoiceProducts} from './components/choice-products/choice-products';
import {ButtonChoice} from './directives/button-choice';
import {ChoiceItogService} from './services/choice-itog-service';
import {ProductCard} from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [FormsModule, StrLeftNNPipe, Phone3Pipe, ChoiceProducts, ButtonChoice, ProductCard],
  providers: [ProdListService,AdvListService],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected advantages: AdvType[] = [];
  protected macaroons: MacaroonType[] =[];
  protected phonePlaceHolder:string='375293689868';

  constructor(private prodList: ProdListService, private advTypes:AdvListService, public trash:ChoiceItogService) {
  }

ngOnInit() {
    this.macaroons=this.prodList.getMacaroons();
    this.advantages=this.advTypes.getAdvantages();
}

  protected formValues = {
    // productTitle: '',
    err_choice: false,
    name: '', err_name: false,
    phone: '', err_phone: false,
    is_error: false,
    form_show: true,
    popup_show: false
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product:string):void {
    alert(product+' добавлен в корзину');
  }


  protected createOrder(nameElm: HTMLInputElement, phoneElm: HTMLInputElement): void {
    nameElm.classList.remove('error-element-input');
    nameElm.classList.add('success-element-input');
    phoneElm.classList.remove('error-element-input');
    phoneElm.classList.add('success-element-input');
    this.formValues.form_show = true;
    this.formValues.popup_show = false;
    this.formValues.err_choice = false;
    this.formValues.err_name = false;
    this.formValues.err_phone = false;
    this.formValues.is_error = false;

    if (this.trash.count===0) {
      alert('Выберите хотя бы один товар');
      this.formValues.is_error = true;
    }

    if (!this.formValues.name) {
      this.formValues.err_name = true;
      this.formValues.is_error = true;
      nameElm.classList.add('error-element-input');
      nameElm.classList.remove('success-element-input');
    }
    if (!this.formValues.phone) {
      this.formValues.err_phone = true;
      this.formValues.is_error = true;
      phoneElm.classList.add('error-element-input');
      phoneElm.classList.remove('success-element-input');
    }

    if (!this.formValues.is_error) {
      this.formValues.form_show = false;
      this.formValues.popup_show = true;
    }
  }
}
