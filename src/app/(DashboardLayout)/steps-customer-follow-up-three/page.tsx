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
    router.push('/steps-customer-follow-up-four');
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
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Panel Principal (70%) */}
        <div className="w-[70%]">
          <CardBox className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-6">Configura las reglas de negocio</h2>

            {/* Horarios de Envío */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Horarios de Envío</h3>
              <div className="bg-white border rounded-lg p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Hora inicio</label>
                    <select className="w-full border rounded-md p-2">
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Hora fin</label>
                    <select className="w-full border rounded-md p-2">
                      <option>05:00 PM</option>
                      <option>06:00 PM</option>
                      <option>07:00 PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <label className="text-sm text-gray-600">Respetar zona horaria del cliente</label>
                </div>
              </div>
            </div>

            {/* Reglas de Seguimiento */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Reglas de Seguimiento</h3>
              <div className="space-y-4">
                {/* Regla 1 */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Si el cliente responde</h4>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-gray-700">✏️</button>
                      <button className="text-red-500 hover:text-red-700">×</button>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="text-sm text-green-700">
                      → Detener secuencia automática
                      <br />
                      → Notificar al equipo de ventas
                    </p>
                  </div>
                </div>

                {/* Regla 2 */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Si no hay respuesta en 7 días</h4>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-gray-700">✏️</button>
                      <button className="text-red-500 hover:text-red-700">×</button>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-md">
                    <p className="text-sm text-yellow-700">
                      → Enviar oferta especial
                      <br />
                      → Marcar como "Requiere atención"
                    </p>
                  </div>
                </div>

                {/* Añadir Regla */}
                <div className="mt-4">
                  <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-purple-500 hover:text-purple-500 transition-colors">
                    + Añadir nueva regla
                  </button>
                </div>
              </div>
            </div>

            {/* Notificaciones */}
            <div>
              <h3 className="font-medium mb-4">Notificaciones al Equipo</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" checked />
                  <label className="text-sm text-gray-600">Notificar respuestas por email</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" checked />
                  <label className="text-sm text-gray-600">Alertas en CRM</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <label className="text-sm text-gray-600">Notificaciones Slack</label>
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
                  Basado en el análisis de tu CRM, he configurado las reglas 
                  óptimas para tu flujo. El horario de 9 AM a 5 PM ha mostrado las 
                  mejores tasas de respuesta en tu sector.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Insight</h4>
                <p className="text-sm text-purple-700">
                  El 78% de tus clientes actuales responden dentro de las primeras 
                  48 horas. He ajustado las reglas para optimizar este patrón.
                </p>
              </div>

              <div className="space-y-3 mt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Horarios optimizados
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Reglas personalizadas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                    →
                  </span>
                  Siguiente: Revisión final
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