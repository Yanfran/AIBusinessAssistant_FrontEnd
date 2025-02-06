"use client";

import React, { useState } from 'react';
import CardBox from '../../components/shared/CardBox';
import { useRouter } from 'next/navigation';

const Page = () => {

  const router = useRouter();
  const [showWizard, setShowWizard] = useState(false);

  const [currentStep, setCurrentStep] = useState(3);
  const totalSteps = 4;
  
  const handleButtonClick = () => {
    setShowWizard(true);
    router.push('/welcome-dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Customer Follow-up</h1>
          <div className="text-sm text-gray-500">
            Paso {currentStep} de {totalSteps}
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Panel Principal (70%) */}
        <div className="w-[70%] space-y-6">
          {/* Servicios Conectados */}
          <CardBox className="p-6">
            <h3 className="font-semibold mb-4">Servicios Conectados</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <p className="font-medium">Gmail</p>
                    <p className="text-sm text-gray-500">Conectado y verificado</p>
                  </div>
                </div>
                <span className="text-green-600">✓</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    💼
                  </div>
                  <div>
                    <p className="font-medium">HubSpot</p>
                    <p className="text-sm text-gray-500">Conectado y verificado</p>
                  </div>
                </div>
                <span className="text-green-600">✓</span>
              </div>
            </div>
          </CardBox>

          {/* Vista Previa del Flujo */}
          <CardBox className="p-6">
            <h3 className="font-semibold mb-4">Vista Previa del Flujo</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="min-w-[2rem] h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  1
                </div>
                <div className="flex-1">
                  <p className="font-medium">Email de Bienvenida</p>
                  <p className="text-sm text-gray-500">Inmediatamente después del primer contacto</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="min-w-[2rem] h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  2
                </div>
                <div className="flex-1">
                  <p className="font-medium">Solicitud de Feedback</p>
                  <p className="text-sm text-gray-500">48 horas después si no hay respuesta</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="min-w-[2rem] h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  3
                </div>
                <div className="flex-1">
                  <p className="font-medium">Recordatorio Final</p>
                  <p className="text-sm text-gray-500">7 días después sin interacción</p>
                </div>
              </div>
            </div>
          </CardBox>

          {/* Configuraciones */}
          <CardBox className="p-6">
            <h3 className="font-semibold mb-4">Configuraciones</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700">Horario de Envío</h4>
                <p className="text-sm text-gray-600 mt-1">9:00 AM - 5:00 PM</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700">Zona Horaria</h4>
                <p className="text-sm text-gray-600 mt-1">Respeta zona del cliente</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700">Notificaciones</h4>
                <p className="text-sm text-gray-600 mt-1">Email + CRM</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700">Reglas Activas</h4>
                <p className="text-sm text-gray-600 mt-1">2 reglas configuradas</p>
              </div>
            </div>
          </CardBox>

          {/* Activación */}
          <div className="flex flex-col items-center">
            <button className="w-full max-w-md bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Activar Automatización
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Podrás modificar la configuración en cualquier momento
            </p>
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
                  Todo está configurado correctamente. Esta automatización está 
                  optimizada según los mejores patrones de éxito en tu industria.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Impacto Estimado</h4>
                <div className="space-y-2">
                  <p className="text-sm text-green-700">
                    • 30% menos tiempo en seguimiento
                  </p>
                  <p className="text-sm text-green-700">
                    • 2x más respuestas de clientes
                  </p>
                  <p className="text-sm text-green-700">
                    • Tiempo de respuesta mejorado a 24h
                  </p>
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Configuración verificada
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Conexiones probadas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Listo para activar
                </div>
              </div>
            </div>
          </CardBox>
        </div>
      </div>
    </div>
  );
};

export default Page;