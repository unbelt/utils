import { Action, createReducer, on } from '@ngrx/store';
import { ITodo } from '../../todo.interfaces';
import { emptyTodoTrash, loadTodoTrash } from '../actions/todo-trash.actions';

export interface ITodoTrashState {
    todos: ITodo[];
}

export const initialTodoTrashState: ITodoTrashState = {
    todos: [],
};

export const reducer = createReducer<ITodoTrashState>(
    initialTodoTrashState,
    on(loadTodoTrash, (state, { payload: { todos } }) => ({ ...state, todos })),
    on(emptyTodoTrash, state => ({
        ...state,
        ...state.todos.map((todo: ITodo) => (todo.isDeleted = true)),
    }))
);

export function todoTrashReducer(state: ITodoTrashState, action: Action) {
    return reducer(state, action);
}
