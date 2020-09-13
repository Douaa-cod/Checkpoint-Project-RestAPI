import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Todo } from '../Model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo = new Todo(0,'','');
  todos : Todo[]
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }
  addTodo(){
    if (this.todos.length){
      this.todo.id = this.todos [this.todos.length -1].id +1;
    }
    else{
      this.todo.id = 1;
    }
    this.todoService.addTodo(this.todo)
    this.todo = new Todo(0,'','')
  }
  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo  )
  }

}
