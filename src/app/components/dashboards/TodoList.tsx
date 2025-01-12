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
    <CardBox>
      <h5 className="text-base">Chat Interface</h5>
      <div className="flex flex-col h-96 overflow-y-auto rounded mb-4 p-2" id="chat-box">
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
    </CardBox>
  );
};

export default TodoList;