"use client";

import React, { useState } from 'react';
import CardBox from '../../../components/shared/CardBox';
import { useRouter } from 'next/navigation';

const Page = () => {

  const router = useRouter();
  const [showWizard, setShowWizard] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const handleButtonClick = () => {
    setShowWizard(true);
    router.push('/first-wizard/start-settings-step-four');
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen flex items-center justify-center">
      <CardBox className="w-full max-w-4xl bg-white p-6 shadow-xl">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Personalización Avanzada</h2>
            <span className="text-sm text-gray-500">Paso 3 de 4</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full transition-all" style={{ width: '75%' }} />
          </div>
        </div>

        <div className="space-y-6 mb-6">
          {/* Trigger Section */}
          <div>
            <h3 className="font-medium mb-3">¿Qué inicia la automatización?</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="border rounded-lg p-4 hover:border-purple-500 hover:bg-purple-50 transition-all flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  📧
                </div>
                <span>Nuevo email</span>
              </button>
              <button className="border rounded-lg p-4 hover:border-purple-500 hover:bg-purple-50 transition-all flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  ➕
                </div>
                <span>Nuevo contacto</span>
              </button>
              <button className="border rounded-lg p-4 hover:border-purple-500 hover:bg-purple-50 transition-all flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  💬
                </div>
                <span>Mensaje recibido</span>
              </button>
              <button className="border rounded-lg p-4 hover:border-purple-500 hover:bg-purple-50 transition-all flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  🕐
                </div>
                <span>Hora específica</span>
              </button>
            </div>
          </div>

          {/* Actions Builder */}
          <div>
            <h3 className="font-medium mb-3">Flujo de acciones</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  1
                </div>
                <select className="flex-1 border rounded-md p-2">
                  <option>Enviar email de bienvenida</option>
                  <option>Crear tarea de seguimiento</option>
                  <option>Actualizar CRM</option>
                </select>
                <button className="text-gray-400 hover:text-red-500">×</button>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  2
                </div>
                <select className="flex-1 border rounded-md p-2">
                  <option>Esperar 2 días</option>
                  <option>Esperar 1 semana</option>
                  <option>Esperar respuesta</option>
                </select>
                <button className="text-gray-400 hover:text-red-500">×</button>
              </div>
              <button className="w-full border-2 border-dashed border-gray-300 p-3 rounded-lg text-gray-500 hover:border-purple-500 hover:text-purple-500">
                + Añadir acción
              </button>
            </div>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="font-medium mb-3">Condiciones especiales</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-blue-900">Horario laboral</span>
                  <div className="flex space-x-2">
                    <input type="time" className="border rounded p-1 text-sm" defaultValue="09:00" />
                    <input type="time" className="border rounded p-1 text-sm" defaultValue="18:00" />
                  </div>
                </div>
                <p className="text-sm text-blue-700">Solo enviar mensajes durante horas laborales</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-green-900">Prioridad cliente</span>
                  <select className="border rounded p-1 text-sm">
                    <option>Alta prioridad</option>
                    <option>Media prioridad</option>
                    <option>Baja prioridad</option>
                  </select>
                </div>
                <p className="text-sm text-green-700">Ajustar seguimiento según prioridad</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              🤖
            </div>
            <span className="font-medium">AI Assistant</span>
          </div>
          <p className="text-sm text-gray-700">
            He configurado un flujo optimizado basado en mejores prácticas. 
            Para tu sector, enviar el primer seguimiento después de 2 días muestra mejores resultados.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
            Anterior
          </button>
          <button onClick={handleButtonClick} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Siguiente
          </button>
        </div>
      </CardBox>
    </div>
  );
};

export default Page;