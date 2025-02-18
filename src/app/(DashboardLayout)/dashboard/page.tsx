"use client";

import { useRouter } from "next/navigation";
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
import { SalesFunnel, ContentMarketing, CustomerFollowUp } from "@/utils/services/webhook";
import CardBox from '../../components/shared/CardBox';
import axios from "axios";
import { onboardingInicialUser } from "@/utils/services/onboardingInicial";
import { OnboardingInicial } from "@/utils/types/onboardingInicial";

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showWizard, setShowWizard] = useState(false);
  const router = useRouter();
  const storedUserData = JSON.parse(localStorage.getItem("userData") || "{}");
  const [onboardingData, setOnboardingData] = useState<OnboardingInicial[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      window.location.href = "/auth/auth2/login";
    }

    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
        // console.log("La data es:", data);
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


  const handleProfileCardClick = async (title: string) => {
    try {
      // Dependiendo del título, realiza una petición diferente
      let data;
      if (title === "Sales Funnel") {
        alert("Fetching Sales Funnel data...");
        data = await SalesFunnel(); 
        console.log("Data:", data);
      } else if (title === "Content Marketing") {
        alert("Fetching Content Marketing data...");
        data = await ContentMarketing(); 
        console.log("Data:", data);
      } else if (title === "Customer Follow-Up") {
        alert("Fetching Customer Follow-Up data...");
        data = await CustomerFollowUp(); 
        console.log("Data:", data);
      }
  
      if (data) {
        setTodos(data);
        console.log(`Data for ${title}:`, data);
      } else {
        console.warn(`No data found for ${title}`);
      }
    } catch (error) {
      console.error(`Error fetching data for ${title}:`, error);
      if (error instanceof Error && (error as any).response?.status === 401) {
        console.error("Sesión expirada. Redirigiendo al login.");
        window.location.href = "/auth/auth2/login";
      }
    }
  };



  const fetchUserOnboarding = async (userId: string) => {
    try {
      const data = await onboardingInicialUser(userId); // Llamamos al servicio
      console.log("Data obtenida:", data);

      // Enviar la data al webhook
      await axios.post("http://localhost:5678/webhook/089e38ab-4eee-4c34-aa5d-54cf4a8f53b7/chat", data);
      console.log("Datos enviados al webhook con éxito");
    } catch (error) {
      
    }
  };

  const handleButtonClick = () => {
    fetchUserOnboarding(storedUserData.data._id);

    /*setShowWizard(true);
    router.push('/first-wizard/start-settings');*/
  };


  return (
    <>   
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-2xl font-semibold mb-2">¡Bienvenido a tu Dashboard!</h1>
        <p className="text-gray-600">Comencemos configurando tu primera automatización</p>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-4xl mx-auto">
        <CardBox className="p-8 text-center">
          {/* Icono */}
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🚀</span>
          </div>

          {/* Texto Principal */}
          <h2 className="text-xl font-semibold mb-4">
            Configura tu Primera Automatización
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Antes de comenzar, necesitamos conocer un poco más sobre tu negocio 
            para ofrecerte las mejores recomendaciones de automatización.
          </p>

          {/* Call to Action */}
          <button 
            onClick={handleButtonClick}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Comenzar Configuración
          </button>

          {/* Info Adicional */}
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                ⚡
              </div>
              <h3 className="font-medium mb-1">Rápido</h3>
              <p className="text-sm text-gray-500">Solo 2 minutos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                🎯
              </div>
              <h3 className="font-medium mb-1">Personalizado</h3>
              <p className="text-sm text-gray-500">Para tu negocio</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                🤖
              </div>
              <h3 className="font-medium mb-1">AI Asistida</h3>
              <p className="text-sm text-gray-500">Recomendaciones smart</p>
            </div>
          </div>
        </CardBox>

        {/* AI Assistant CardBox */}
        <CardBox className="mt-6 p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              🤖
            </div>
            <div>
              <h3 className="font-medium mb-2">AI Assistant</h3>
              <p className="text-gray-600">
                ¡Hola! Estoy aquí para ayudarte a configurar tus automatizaciones. 
                Con unos simples pasos, podremos personalizar todo según las necesidades 
                de tu negocio.
              </p>
            </div>
          </div>
        </CardBox>
      </div>

      {/* Aquí iría la importación y renderizado condicional del wizard */}
      {showWizard && (
        <div className="text-center text-gray-500 text-sm mt-4">
          (Aquí se abriría el wizard de pre-automatización)
        </div>
      )}
    </div>

    </>
  );
};

export default Page;