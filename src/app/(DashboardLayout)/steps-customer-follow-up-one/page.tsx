"use client";

import React, { useState } from 'react';
import CardBox from '../../components/shared/CardBox';
import { useRouter } from 'next/navigation';

const Page = () => {

  const router = useRouter();
  const [showWizard, setShowWizard] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const handleButtonClick = () => {
    setShowWizard(true);
    router.push('/steps-customer-follow-up-two');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header con Progreso */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Customer Follow-up</h1>
          <div className="text-sm text-gray-500">
            Paso {currentStep} de {totalSteps}
          </div>
        </div>
        
        {/* Barra de Progreso */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Panel Principal (70%) */}
        <div className="w-[70%]">
          <CardBox className="p-6 mb-6">
            {/* Contenido del Paso 1: Conexión de Servicios */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Conecta los servicios necesarios</h2>
              <p className="text-gray-600">
                Para comenzar con el seguimiento automático, necesitamos conectar tus servicios principales.
              </p>

              {/* Gmail Connection */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-medium">Gmail</h3>
                      <p className="text-sm text-gray-500">Conecta tu cuenta de correo</p>
                    </div>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                    Conectado ✓
                  </button>
                </div>
              </div>

              {/* CRM Connection */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      💼
                    </div>
                    <div>
                      <h3 className="font-medium">CRM</h3>
                      <p className="text-sm text-gray-500">Conecta tu CRM preferido</p>
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">
                    Conectar
                  </button>
                </div>
              </div>
            </div>
          </CardBox>

          {/* Navegación */}
          <div className="flex justify-between">
            <button className="px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Anterior
            </button>
            <button onClick={handleButtonClick} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Siguiente
            </button>
          </div>
        </div>

        {/* Panel AI Assistant (30%) */}
        <div className="w-[30%]">
          <CardBox className="p-6 sticky top-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-sm text-gray-500">Guiándote en el proceso</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  Excelente elección. Gmail ya está conectado. Ahora necesitamos 
                  conectar tu CRM para automatizar el seguimiento de manera eficiente.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Gmail listo para usar
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                    →
                  </span>
                  Siguiente: Configurar secuencia
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Tip</h4>
                <p className="text-sm text-yellow-700">
                  Asegúrate de tener acceso de administrador en tu CRM para una 
                  conexión exitosa.
                </p>
              </div>
            </div>
          </CardBox>
        </div>
      </div>
    </div>
  );
};

export default Page;