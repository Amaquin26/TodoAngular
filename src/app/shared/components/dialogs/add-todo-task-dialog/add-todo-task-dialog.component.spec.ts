import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoTaskDialogComponent } from './add-todo-task-dialog.component';

describe('AddTodoTaskDialogComponent', () => {
  let component: AddTodoTaskDialogComponent;
  let fixture: ComponentFixture<AddTodoTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodoTaskDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
