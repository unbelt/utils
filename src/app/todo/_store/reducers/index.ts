import { ActionReducerMap } from '@ngrx/store';
import { ITodoListState, todoListReducer } from './todo-list.reducer';
import { ITodoTrashState, todoTrashReducer } from './todo-trash.reducer';

export const todoModuleName = 'todo';

export interface ITodoState {
    readonly list: ITodoListState;
    readonly trash: ITodoTrashState;
}

export const todoReducerMap: ActionReducerMap<ITodoState> = {
    list: todoListReducer,
    trash: todoTrashReducer,
};
