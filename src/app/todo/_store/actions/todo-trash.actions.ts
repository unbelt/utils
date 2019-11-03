import { createAction } from '@ngrx/store';
import { ITodo } from '../../todo.interfaces';
import { actionType } from './action-type';

export const loadTodoTrash = createAction(
    actionType('[TODO Trash] Load'),
    (todos: ITodo[]) => ({ payload: { todos } })
);

export const restoreTodo = createAction(
    actionType('[TODO Trash] Restore'),
    (id: number) => ({ payload: { id } })
);

export const emptyTodoTrash = createAction(actionType('[TODO Trash] Empty'));
