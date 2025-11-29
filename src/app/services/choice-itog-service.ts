import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChoiceItogService {
  public count: number =0;
  public summa:number = 0;

  addChoice(rr:number){
    this.count++;
    this.summa =this.summa + rr;
  }
}
