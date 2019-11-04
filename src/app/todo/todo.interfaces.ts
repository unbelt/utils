export interface ITodo {
    id: number;
    title: string;
    description?: string;
    isCompleted?: boolean;
    isInTrash?: boolean;
    isDeleted?: boolean;
}
