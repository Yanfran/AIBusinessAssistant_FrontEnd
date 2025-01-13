import React from 'react';
import { Todo } from '@/utils/services/todoService';
import { Button, TextInput } from 'flowbite-react';
import CardBox from '../shared/CardBox';

interface TodoListProps {
  todos: Todo[];
  handleCreateTodo: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleCreateTodo }) => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full left-[350px] w-[calc(100%-350px)] bg-white dark:bg-gray-800 shadow-md p-4 mr-20"
    >
      <h5 className="text-base">Chat Interface</h5>
      <div className="flex flex-col h-64 overflow-y-auto rounded mb-4 p-2 bg-gray-100 dark:bg-gray-700">
        {todos.map((todo, index) => (
          <div key={index} className="p-2 bg-muted dark:bg-darkmuted text-ld rounded-md">
            {todo.text}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <TextInput
          className="flex-grow p-2 border-0 border-gray-300 mr-2"
          sizing="sm"
          required
          placeholder="Type your message..."
        />
        <Button size="xs" color="dark" onClick={handleCreateTodo}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
