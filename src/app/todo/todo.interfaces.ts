export interface ITodo {
    id: number;
    title: string;
    description?: string;
    isCompleted?: boolean;
    isVisible?: boolean;
    isDeleted?: boolean;
}
