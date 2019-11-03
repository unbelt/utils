import { Action, createReducer, on } from '@ngrx/store';
import { ITodo } from '../../todo.interfaces';
import { loadTodoList, loadTodoListSuccess } from '../actions/todo-list.actions';

export interface ITodoListState {
    todos: ITodo[];
    isLoaded?: boolean;
}

export const initialTodoListState: ITodoListState = {
    todos: [],
};

const reducer = createReducer<ITodoListState>(
    initialTodoListState,
    on(loadTodoList, state => ({ ...state })),
    on(loadTodoListSuccess, (state, { payload: { todos } }) => ({
        ...state,
        todos,
        isLoaded: true,
    }))
);

export function todoListReducer(state: ITodoListState, action: Action) {
    return reducer(state, action);
}
