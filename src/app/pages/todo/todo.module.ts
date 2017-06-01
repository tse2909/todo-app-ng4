import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../providers/todo-service';
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path: 'todo', component: TodoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TodoComponent, TodoFormComponent, TodoListComponent],
  providers: [TodoService]
})
export class TodoModule { }
