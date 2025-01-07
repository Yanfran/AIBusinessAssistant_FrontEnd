import apiClient from "../axios";

// Definición de interfaces para tipos
export interface Todo {
  id?: string;
  _id?: string;
  text: string;
  name: string;
  descripcion: string;
}

// Obtener todos los todos
export const getTodos = async (): Promise<Todo[]> => {
  const { data } = await apiClient.get<{ data: Todo[] }>("/todos");
  return data.data;
};

// Crear un nuevo todo
export const createTodo = async (todo: Omit<Todo, "id">): Promise<Todo> => {
  const { data } = await apiClient.post<Todo>("/todos", todo);
  return data;
};

// Actualizar un todo existente
export const updateTodo = async (id: string, todo: Partial<Todo>): Promise<Todo> => {
  const { data } = await apiClient.put<Todo>(`/todos/${id}`, todo);
  return data;
};

// Eliminar un todo
export const deleteTodo = async (id: string): Promise<void> => {
  await apiClient.delete(`/todos/${id}`);
};
