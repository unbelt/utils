import { Component, OnInit } from '@angular/core';
import { TodoListModel } from '../_store/models/todo-list.model';

@Component({
    templateUrl: 'todo-list.html',
})
export class TodoListComponent implements OnInit {
    todos$ = this.todoListModel.todos$;
    isLoaded$ = this.todoListModel.isLoaded$;

    constructor(private todoListModel: TodoListModel) {}

    ngOnInit(): void {
        this.todoListModel.loadTodoList();
    }
}
