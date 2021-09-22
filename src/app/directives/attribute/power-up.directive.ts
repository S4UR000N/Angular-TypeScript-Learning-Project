import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPowerUp]'
})
export class PowerUpDirective {
  private element: ElementRef;
  private counter: number = 0;
  private heldFor: number = 0;
  private timeoutReferences: any[] = [];

  @Input() public appPowerUp: string = '';
  @Input() public smth: number = 0;
  @Input('oh') public look: number = 0;
  @Input() public needNoBracketsWithStringValue: string = '';

  constructor(element: ElementRef) {
    this.element = element;
    this.colorIt('crimson');    
  } ngAfterViewInit() {
    console.log(this.needNoBracketsWithStringValue);
    
  }

  @HostListener('mousedown') onMouseDown() {
    this.recursiveNumberIncrementScaling(200);
  }
  @HostListener('mouseup') onMouseUp() {
    this.clearAll();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.clearAll();
  }

  recursiveNumberIncrementScaling(ms: number) {
    this.counter++;
    this.heldFor++;
    this.counterDisplay();
    
    switch(true) {
      case(this.heldFor == 5):
        ms = 150;
        this.timeoutReferences.push(setTimeout(this.recursiveNumberIncrementScaling.bind(this, ms), ms));
        break;
      case(this.heldFor == 10):
        ms = 150;
        this.timeoutReferences.push(setTimeout(this.recursiveNumberIncrementScaling.bind(this, ms), ms));
        break;
      case(this.heldFor == 25):
        ms = 100;
        this.timeoutReferences.push(setTimeout(this.recursiveNumberIncrementScaling.bind(this, ms), ms));
        break;
      case(this.heldFor == 75):
        ms = 50;
        this.timeoutReferences.push(setTimeout(this.recursiveNumberIncrementScaling.bind(this, ms), ms));
        break;
      case(this.heldFor == 150):
        ms = 20;
        this.timeoutReferences.push(setTimeout(this.recursiveNumberIncrementScaling.bind(this, ms), ms));
        break;
    }
    // setTimeout(() => {this.proGamerMove(ms)}, ms);
    this.timeoutReferences.push(setTimeout(this.recursiveNumberIncrementScaling.bind(this, ms), ms));
    console.log(this.counter +'-'+ ms);
  }

  // clearAll() {
  //   const highestId = window.setTimeout(() => {
  //     for (let i = highestId; i >= 0; i--) {
  //       window.clearInterval(i);
  //       console.log("%cThis is a green text", "color:red");
  //     }
  //   }, 0);
  //   this.heldFor = 0;
  // }
  clearAll() {
    this.timeoutReferences.forEach(timeout => clearTimeout(timeout));
    this.heldFor = 0;
  }

  counterDisplay() {
    this.counter != 0
    ? this.element.nativeElement.innerText = this.counter
    : this.element.nativeElement.innerText = 'powerr'
  }

  colorIt(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
function input() {
  throw new Error('Function not implemented.');
}

