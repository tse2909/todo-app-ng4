import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos;
  @Output() toggleTodoComplete: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeTodo: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
