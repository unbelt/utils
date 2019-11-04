import { Action, createReducer, on } from '@ngrx/store';
import { ITodo } from '../../todo.interfaces';
import {
    addTodo,
    deleteTodo,
    loadTodoList,
    loadTodoListSuccess,
    toggleTodoComplete,
} from '../actions/todo-list.actions';
import { emptyTodoTrash, restoreTodo } from '../actions/todo-trash.actions';

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
        todos: state.todos.length ? state.todos : todos,
        isLoaded: true,
    })),
    on(addTodo, (state, { payload: { todo } }) => ({
        ...state,
        todos: [todo, ...state.todos],
    })),
    on(toggleTodoComplete, (state, { payload: { id } }) => {
        const todo = state.todos.find((t: ITodo) => t.id === id);

        if (todo) {
            todo.isCompleted = !todo.isCompleted;
        }

        return {
            ...state,
            todos: [...state.todos.filter((t: ITodo) => t.id !== id), todo],
        };
    }),
    on(deleteTodo, (state, { payload: { id } }) => ({
        ...state,
        todos: state.todos.map((todo: ITodo) => {
            if (todo.id === id) {
                todo.isInTrash = true;
            }

            return todo;
        }),
    })),
    on(emptyTodoTrash, state => ({
        ...state,
        todos: state.todos.map((todo: ITodo) => {
            if (todo.isInTrash) {
                todo.isDeleted = true;
            }

            return todo;
        }),
    })),
    on(restoreTodo, (state, { payload: { id } }) => ({
        ...state,
        todos: state.todos.map((todo: ITodo) => {
            if (todo.id === id) {
                todo.isInTrash = false;
            }

            return todo;
        }),
    }))
);

export function todoListReducer(state: ITodoListState, action: Action) {
    return reducer(state, action);
}
