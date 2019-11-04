import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { ITodo } from './todo.interfaces';

@Injectable({ providedIn: 'root' })
export class TodoService {
    // TODO: Get from the server
    private initialTodos: ITodo[] = [
        {
            id: 1,
            title: 'Buy bread 🍞 and bacon 🥓',
            description: 'for a sandwich 🍔',
        },
        {
            id: 2,
            title: 'Walk the dog 🐕',
        },
        {
            id: 3,
            title: 'Take out the trash 🗑️',
            description: 'ASAP!',
        },
    ];

    getTodos(): Observable<ITodo[]> {
        return of(this.initialTodos).pipe(delay(1000));
    }
}
