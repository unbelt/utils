import { ITodoTrashState } from '../reducers/todo-trash.reducer';

export const getTodoTrash = (state: ITodoTrashState) => state.todos;
