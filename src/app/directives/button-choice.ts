import {Directive, ElementRef, HostBinding, HostListener, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[ButtonChoice]'
})
export class ButtonChoice implements OnInit {
  private coolInputDefault: string ='1px 5px 9px 1px transparent';
  private coolFocusDefaultBgColor: string ='1px 5px 9px 1px rgba(130, 19, 40, 0.5)';
  private defaultBgImage: string ='linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';

  constructor(private el: ElementRef,private rend: Renderer2) {

  }

  ngOnInit() {
    this.rend.setStyle(this.el.nativeElement,'background-image',this.defaultBgImage);
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.rend.setStyle(this.el.nativeElement,'box-shadow',this.coolFocusDefaultBgColor);
   // console.log('mouseenter');
// alert('поймал');
//     this.rend.setStyle(this.el.nativeElement,'backgroundColor','orange');
    this._isOnFocus = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.rend.setStyle(this.el.nativeElement,'box-shadow',this.coolInputDefault);
    this._isOnFocus = false;
  }


  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')
  get isOnFocus() {return this._isOnFocus;}


}
