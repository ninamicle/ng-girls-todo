import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  @Output() save = new EventEmitter<Todo>();
  form: FormGroup = this.initForm();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  initForm() {
    let form = this.fb.group(new Todo());
    return form;
  }

  submit() {
    this.save.emit(this.form.value);
    this.form.reset();
  }
}
