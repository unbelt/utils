import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ITodo } from '../../todo.interfaces';
import { TodoService } from '../../todo.service';
import { loadTodoList, loadTodoListFailure, loadTodoListSuccess } from '../actions/todo-list.actions';

@Injectable()
export class TodoListEffects {
    listTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTodoList),
            switchMap(() =>
                this.todoService.getTodos().pipe(
                    map((todos: ITodo[]) => loadTodoListSuccess(todos)),
                    catchError((error: Error) => [loadTodoListFailure(error)])
                )
            )
        )
    );

    constructor(private actions$: Actions, private todoService: TodoService) {}
}
