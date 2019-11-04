import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoListModel } from '../_store/models/todo-list.model';
import { ITodo } from '../todo.interfaces';

@Component({
    templateUrl: 'todo-list.html',
    styleUrls: ['todo-list.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
    todos$ = this.todoListModel.todos$;
    isLoaded$ = this.todoListModel.isLoaded$;

    todoFormGroup: FormGroup;

    constructor(private todoListModel: TodoListModel) {}

    ngOnInit(): void {
        this.todoListModel.loadTodoList();
        this.createFromGroup();
    }

    addTodo(): void {
        const todo: ITodo = {
            id: Math.floor(Math.random() * 10000 + 10),
            title: this.todoFormGroup.value.title,
            description: this.todoFormGroup.value.description,
        };

        this.todoListModel.addTodo(todo);
        this.todoFormGroup.reset();
    }

    toggleTodoComplete(id: number): void {
        this.todoListModel.toggleTodoComplete(id);
    }

    deleteTodo(id: number): void {
        this.todoListModel.deleteTodo(id);
    }

    private createFromGroup(): void {
        this.todoFormGroup = new FormGroup({
            title: new FormControl(undefined, [Validators.required, Validators.minLength(2)]),
            description: new FormControl(),
        });
    }
}
