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
    router.push('/start-settings-welcome');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-3 mt-2">
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Optimización Activa
              </span>
              <span className="text-gray-500">47:59:01 restantes</span>
            </div>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Mantener Beneficios Pro
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Categorías */}
        <div className="grid grid-cols-3 gap-4">
          {/* Ventas */}
          <CardBox className="p-6 cursor-pointer hover:border-purple-400 hover:shadow-md transition-all border-2 border-green-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-medium mb-2">Ventas</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Activo
              </span>
            </div>
          </CardBox>

          {/* Marketing */}
          <CardBox className="p-6 bg-gray-100 relative overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📣</span>
              </div>
              <h3 className="font-medium mb-2">Marketing</h3>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                Próximamente
              </span>
            </div>
            <div className="absolute inset-0 bg-gray-100/50"></div>
          </CardBox>

          {/* Operaciones */}
          <CardBox className="p-6 bg-gray-100 relative overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-medium mb-2">Operaciones</h3>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                Próximamente
              </span>
            </div>
            <div className="absolute inset-0 bg-gray-100/50"></div>
          </CardBox>
        </div>

        {/* Customer Follow-up Activo */}
        <CardBox className="p-6 border-2 border-green-100">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              🚀
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <h3 className="font-medium text-lg">Customer Follow-up</h3>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  Activo y Funcionando
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-green-600">5 min</div>
                  <div className="text-xs text-gray-600">Tiempo Respuesta</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-green-600">24</div>
                  <div className="text-xs text-gray-600">Respuestas Auto.</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-green-600">89%</div>
                  <div className="text-xs text-gray-600">Satisfacción</div>
                </div>
              </div>

              <button className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700">
                Ver Detalles y Analytics →
              </button>
            </div>
          </div>
        </CardBox>

        {/* AI Assistant */}
        <CardBox className="p-6 bg-gradient-to-r from-purple-50 to-white">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              🤖
            </div>
            <div>
              <h3 className="font-medium mb-2">AI Assistant - Automatización Activa</h3>
              <p className="text-gray-600 text-sm mb-3">
                ¡Excelente! Tu primera automatización está funcionando. Los resultados iniciales son prometedores:
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-700">✓</span>
                  <span>Tiempo de respuesta reducido en un 80%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-700">✓</span>
                  <span>24 clientes atendidos automáticamente</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-700">✓</span>
                  <span>Alta satisfacción en las respuestas automáticas</span>
                </div>
              </div>
            </div>
          </div>
        </CardBox>

        {/* Time Reminder */}
        <CardBox className="p-4 bg-purple-50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-purple-700">
              ⏰ No pierdas estos resultados. Actualiza a Pro antes de que expire tu optimización.
            </span>
            <button className="text-purple-600 text-sm hover:text-purple-700">
              Ver Planes Pro →
            </button>
          </div>
        </CardBox>
      </div>
    </div>
  );
};

export default Page;