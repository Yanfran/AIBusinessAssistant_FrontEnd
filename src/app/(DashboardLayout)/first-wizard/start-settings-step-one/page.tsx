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
    router.push('/first-wizard/start-settings-step-three');
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen flex items-center justify-center">      
      <CardBox className="w-full max-w-4xl bg-white p-6 shadow-xl">
        {/* Header y Progreso */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Conecta tus Herramientas</h2>
            <span className="text-sm text-gray-500">Paso 2 de 4</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full transition-all" style={{ width: '50%' }} />
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="space-y-6 mb-6">
          {/* Email */}
          <div>
            <h3 className="font-medium mb-3">Email</h3>
            <div className="grid grid-cols-3 gap-3">
              <button className="border rounded-lg p-3 hover:border-purple-500 hover:bg-purple-50 transition-all">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    ✉️
                  </div>
                  <span className="text-sm">Gmail</span>
                </div>
              </button>
              <button className="border rounded-lg p-3 hover:border-purple-500 hover:bg-purple-50 transition-all">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    📧
                  </div>
                  <span className="text-sm">Outlook</span>
                </div>
              </button>
              <button className="border rounded-lg p-3 hover:border-purple-500 hover:bg-purple-50 transition-all">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    📨
                  </div>
                  <span className="text-sm">SendGrid</span>
                </div>
              </button>
            </div>
          </div>

          {/* CRM */}
          <div>
            <h3 className="font-medium mb-3">CRM</h3>
            <div className="grid grid-cols-3 gap-3">
              <button className="border rounded-lg p-3 hover:border-purple-500 hover:bg-purple-50 transition-all">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    💼
                  </div>
                  <span className="text-sm">HubSpot</span>
                </div>
              </button>
              <button className="border rounded-lg p-3 hover:border-purple-500 hover:bg-purple-50 transition-all">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    🔄
                  </div>
                  <span className="text-sm">Salesforce</span>
                </div>
              </button>
              <button className="border rounded-lg p-3 hover:border-purple-500 hover:bg-purple-50 transition-all">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    📊
                  </div>
                  <span className="text-sm">Pipedrive</span>
                </div>
              </button>
            </div>
          </div>

          {/* Permisos Requeridos */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium mb-3">Permisos Requeridos</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span>🔐</span>
                  <span className="text-sm">Lectura de emails</span>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span>📝</span>
                  <span className="text-sm">Envío de mensajes</span>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span>📊</span>
                  <span className="text-sm">Acceso a reportes</span>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel AI Assistant */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              🤖
            </div>
            <span className="font-medium">AI Assistant</span>
          </div>
          <p className="text-sm text-gray-700">
            Para automatizar el seguimiento de clientes, necesitaremos conectar tu email y CRM. 
            Selecciona los servicios que usas y configura los permisos necesarios.
          </p>
        </div>

        {/* Botones de Navegación */}
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