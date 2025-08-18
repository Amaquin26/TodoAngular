import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoSubtaskDialogComponent } from './edit-todo-subtask-dialog.component';

describe('EditTodoSubtaskDialogComponent', () => {
  let component: EditTodoSubtaskDialogComponent;
  let fixture: ComponentFixture<EditTodoSubtaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTodoSubtaskDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTodoSubtaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
