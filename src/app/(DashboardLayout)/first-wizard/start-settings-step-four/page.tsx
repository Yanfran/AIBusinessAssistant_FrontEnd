"use client";

import React, { useState } from 'react';
import CardBox from '../../../components/shared/CardBox';
import { useRouter } from 'next/navigation';

const Page = () => {

  const router = useRouter();
  const [showWizard, setShowWizard] = useState(false);

  const [currentStep, setCurrentStep] = useState(4);
  const totalSteps = 4;
  
  const handleButtonClick = () => {
    setShowWizard(true);
    router.push('/start-settings-welcome');
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen flex items-center justify-center">
      <CardBox className="w-full max-w-4xl bg-white p-6 shadow-xl">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Revisión Final</h2>
            <span className="text-sm text-gray-500">Paso 4 de 4</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full transition-all" style={{ width: '100%' }} />
          </div>
        </div>

        <div className="space-y-6 mb-6">
          {/* Servicios Conectados */}
          <div>
            <h3 className="font-medium mb-3">Servicios Conectados</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <p className="font-medium">Gmail</p>
                    <p className="text-sm text-green-600">Conectado</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    💼
                  </div>
                  <div>
                    <p className="font-medium">HubSpot</p>
                    <p className="text-sm text-green-600">Conectado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen de Flujo */}
          <div>
            <h3 className="font-medium mb-3">Flujo de Automatización</h3>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Nuevo contacto en CRM</p>
                    <p className="text-sm text-purple-600">Trigger inicial</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Enviar email de bienvenida</p>
                    <p className="text-sm text-purple-600">Inmediatamente</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Esperar respuesta</p>
                    <p className="text-sm text-purple-600">2 días máximo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Condiciones */}
          <div>
            <h3 className="font-medium mb-3">Condiciones Configuradas</h3>
            <div className="bg-blue-50 p-4 rounded-lg space-y-3">
              <div>
                <p className="font-medium text-blue-900">Horario de Envío</p>
                <p className="text-sm text-blue-700">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-blue-900">Prioridad de Cliente</p>
                <p className="text-sm text-blue-700">Alta prioridad - Respuesta en 24h</p>
              </div>
            </div>
          </div>

          {/* Métricas Esperadas */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-900 mb-2">Impacto Estimado</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-green-800 font-medium">Tiempo Ahorrado</p>
                <p className="text-2xl font-bold text-green-700">30%</p>
              </div>
              <div>
                <p className="text-sm text-green-800 font-medium">Respuestas</p>
                <p className="text-2xl font-bold text-green-700">+40%</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant */}
        <div className="bg-purple-50 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              🤖
            </div>
            <span className="font-medium">AI Assistant</span>
          </div>
          <p className="text-sm text-purple-700">
            Todo está listo para activar. He optimizado el flujo basado en datos de éxito 
            de tu industria. La automatización comenzará inmediatamente después de la activación.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
            Anterior
          </button>
          <button onClick={handleButtonClick} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2">
            <span>Activar Automatización</span>
            <span>→</span>
          </button>
        </div>
      </CardBox>
    </div>
  );
};

export default Page;