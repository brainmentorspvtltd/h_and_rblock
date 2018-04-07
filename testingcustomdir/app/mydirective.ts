import {
  Input,
   Directive,
    OnInit,
    ElementRef,
     Renderer2,HostListener
    } from '@angular/core';
@Directive({
  selector:'[mycolor]'
})
export class ColorDirective implements OnInit{

  @Input('mycolor')
  activeColor:string;
  constructor(private elementRef:ElementRef,private render:Renderer2){

  }
  ngOnInit(){
  //this.elementRef.nativeElement.style.backgroundColor='red';
  this.render.setStyle(this.elementRef.nativeElement,'background-color',this.activeColor );
}

@HostListener('click') onClick() {
  this.render.setStyle(this.elementRef.nativeElement, 'background-color','orange');
   }
}
