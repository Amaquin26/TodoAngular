import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCheckedTodoSubtask]'
})
export class CheckedTodoSubtaskDirective implements OnChanges {
  @Input('appCheckedTodoSubtask') isChecked: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isChecked']) {
      if (this.isChecked) {
        this.renderer.addClass(this.el.nativeElement, 'line-through');
        this.renderer.addClass(this.el.nativeElement, 'opacity-75');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'line-through');
        this.renderer.removeClass(this.el.nativeElement, 'opacity-75');
      }
    }
  }
}
