import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[rotate]',
  standalone: true,
})
export class RotateDirective {
  @Input('rotate')
  initialRotation: string = '0';

  @Input()
  step: string = '10';

  totalAngle = 0;

  constructor(private eleRef: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    this.eleRef.nativeElement.style.transform = `rotate(${this.initialRotation}deg)`;
    this.totalAngle += Number(this.initialRotation);
  }

  @HostListener('click')
  onMouseClick() {
    if (this.isShiftPressed) {
      this.totalAngle += -Number(this.step);
      console.log(this.totalAngle + ' izquierda');
      this.eleRef.nativeElement.style.transform = `rotate(${this.totalAngle}deg)`;
    } else {
      this.totalAngle += Number(this.step);
      this.eleRef.nativeElement.style.transform = `rotate(${this.totalAngle}deg)`;
      console.log(this.totalAngle + ' derecha');
    }
  }

  private isShiftPressed = false;

  @HostListener('window:keydown.shift', ['$event'])
  onMayusClick(e: KeyboardEvent) {
    if (!this.isShiftPressed) {
      this.isShiftPressed = true;
      console.log('click on mayus');
    }
  }

  @HostListener('window:keyup.shift', ['$event'])
  onKeyUp(e: KeyboardEvent) {
    if (this.isShiftPressed) {
      this.isShiftPressed = false;
      console.log('Shift liberado');
    }
  }
}
