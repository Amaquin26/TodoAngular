import { ElementRef } from '@angular/core';
import { CheckedTodoSubtaskDirective } from './checked-todo-subtask.directive';

describe('CheckedTodoSubtaskDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} } as ElementRef;
    const mockRenderer2 = jasmine.createSpyObj('Renderer2', [
      'addClass', 'removeClass', 'setAttribute', 'removeAttribute', 'setStyle', 'removeStyle', 'setProperty', 'listen', 'selectRootElement', 'createElement', 'createComment', 'createText', 'appendChild', 'insertBefore', 'removeChild', 'parentNode', 'nextSibling'
    ]);
    const directive = new CheckedTodoSubtaskDirective(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });
});
