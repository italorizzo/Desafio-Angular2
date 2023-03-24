import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomizado]'
})
export class CustomizadoDirective{

  @Input('appCustomizado') customizadoCores: string = ''

  constructor(private _elementRef: ElementRef) {
  }

  ngOnChanges(){
    this._elementRef.nativeElement.style.color = this.customizadoCores
  }
}
