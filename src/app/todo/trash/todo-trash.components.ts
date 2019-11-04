import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoTrashModel } from '../_store/models/todo-trash.model';

@Component({
    templateUrl: 'todo-trash.html',
    styleUrls: ['todo-trash.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoTrashComponent implements OnInit {
    todos$ = this.todoTrashModel.todos$;

    constructor(private todoTrashModel: TodoTrashModel) {}

    ngOnInit(): void {
        this.todoTrashModel.loadTodoTrash();
    }

    emptyTodoTrash(): void {
        this.todoTrashModel.emptyTodoTrash();
    }

    restoreTodo(id: number): void {
        this.todoTrashModel.restoreTodo(id);
    }
}
