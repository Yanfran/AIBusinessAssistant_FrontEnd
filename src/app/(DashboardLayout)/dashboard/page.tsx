"use client";

import React, { useState, useEffect } from "react";
import { getTodos, createTodo, deleteTodo } from "@/utils/services/todoService";
import { Todo } from "@/utils/services/todoService";
import { Button } from "flowbite-react";
import ProfileCard from "../../components/dashboards/ProfileCard";
import TodoList from "../../components/dashboards/TodoList";
import Breadcrumbs from "../../components/dashboards/Breadcrumbs";
import user1 from "/public/images/profile/user-6.jpg";
import user2 from "/public/images/profile/user-2.jpg";
import user3 from "/public/images/profile/user-3.jpg";

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      window.location.href = "/auth/auth2/login";
    }

    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
        console.log("La data es:", data);
      } catch (error) {
        if (error instanceof Error && (error as any).response?.status === 401) {
          console.error("Sesión expirada. Redirigiendo al login.");
          window.location.href = "/auth/auth2/login";
        } else {
          console.error("Error fetching todos:", error);
        }
      }
    };
    fetchTodos();
  }, []);

  const handleCreateTodo = async () => {
    try {
      const newTodo = await createTodo({
        text: "Nuevo Todo",
        name: "Ejemplo",
        descripcion: "Descripción del Todo",
      });
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const profilecards = [
    {
      title: "Customer Follow-Up",
      subtitle: "Sint Maarten",
      avatar: user1,
    },
    {
      title: "Content Marketing",
      subtitle: "Bulgaria",
      avatar: user2,
    },
    {
      title: "Sales Funnel",
      subtitle: "Nepal",
      avatar: user3,
    },
  ];

  return (
    <>
      <Breadcrumbs />
      <h5 className="card-title text-xl font-semibold mb-4">Dashboard Overview</h5>
      <div className="flex flex-wrap gap-2 mt-2 mb-2">
        <Button size="xs" color="dark">New Automation</Button>
        <Button size="xs" color="light">Export Data</Button>
      </div>
      <div className="grid grid-cols-12 gap-[20px] mb-3">
        {profilecards.map((item, i) => (
          <div className="lg:col-span-4 col-span-12" key={i}>
            <ProfileCard title={item.title} subtitle={item.subtitle} avatar={item.avatar} />
          </div>
        ))}
      </div>
      <TodoList todos={todos} handleCreateTodo={handleCreateTodo} />
    </>
  );
};

export default Page;