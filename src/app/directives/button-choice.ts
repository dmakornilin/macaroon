import {Directive, ElementRef, HostBinding, HostListener, Renderer2, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[ButtonChoice]'
})
export class ButtonChoice implements OnInit {
  public coolInputDefault: string ='1px 5px 9px 1px transparent';
  public coolFocusDefaultBgColor: string ='1px 5px 9px 1px rgba(130, 19, 40, 0.5)';

  @Input('myBgNotFocus') myBgNotFocus:string='rgb(205,215,72)';
  @Input('myBgOnFocus') myBgOnFocus:string = 'rgb(183,70,93)';

  constructor(private el: ElementRef,private rend: Renderer2) {

  }

  ngOnInit() {
    this.rend.setStyle(this.el.nativeElement,'background-color',this.myBgNotFocus);
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.rend.setStyle(this.el.nativeElement,'box-shadow',this.coolFocusDefaultBgColor);
    this.rend.setStyle(this.el.nativeElement,'background-color',this.myBgOnFocus);
    this._isOnFocus = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.rend.setStyle(this.el.nativeElement,'box-shadow',this.coolInputDefault);
    this.rend.setStyle(this.el.nativeElement,'background-color',this.myBgNotFocus);
    this._isOnFocus = false;
  }


  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')
  get isOnFocus() {return this._isOnFocus;}


}
