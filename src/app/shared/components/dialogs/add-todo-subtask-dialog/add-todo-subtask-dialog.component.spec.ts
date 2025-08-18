import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoSubtaskDialogComponent } from './add-todo-subtask-dialog.component';

describe('AddTodoSubtaskDialogComponentHtml', () => {
  let component: AddTodoSubtaskDialogComponent;
  let fixture: ComponentFixture<AddTodoSubtaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodoSubtaskDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoSubtaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
