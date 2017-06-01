import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { requestTodo, addTodo, updateTodo, removeTodo } from '../../ngrx/actions/todo';
import { getTodos } from '../../ngrx/reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Observable<any[]>;
  actions$ = new Subject<Action>();
  constructor(public store: Store<any>) {
    this.actions$.subscribe(store);
    this.actions$.next(requestTodo());
    this.todos = this.store.let(getTodos());
   }

  ngOnInit() {
  }

  addTodo($event){
    console.log($event);
    let todoData = {
      title : $event,
      finish : false
    }
    this.actions$.next(addTodo(todoData));
    this.todos = this.store.let(getTodos());
  }

  toggleTodoComplete($event){
    let todoData = {
      id : $event._id,
      finish : !$event.finish
    }
    console.log(todoData);
    this.actions$.next(updateTodo(todoData));
    this.todos = this.store.let(getTodos());
  }

  removeTodo($event){
    let todoData = {
      id : $event._id,
    }
    this.actions$.next(removeTodo(todoData));
    this.todos = this.store.let(getTodos());
  }
}
