"use client";

import React, { useState } from 'react';
import CardBox from '../../../components/shared/CardBox';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [showWizard, setShowWizard] = useState(false);
  
  const handleButtonClick = () => {
    setShowWizard(true);
    router.push('/first-wizard/start-settings-step-one');    
  };
  return (
    <div className="p-4 bg-gray-50  flex items-center justify-center">
      {/* Modal Content */}
      <CardBox className="w-full max-w-4xl bg-white p-6 shadow-xl">
        {/* Header y Progreso */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Configuración Inicial</h2>
            <span className="text-sm text-gray-500">
              Paso 1 de 4
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all"
              style={{ width: '25%' }}
            />
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="mb-6">
          <div className="space-y-4">
            <h3 className="font-medium">¿Qué área quieres automatizar?</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 cursor-pointer hover:border-purple-500">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    📈
                  </div>
                  <span>Ventas</span>
                </div>
              </div>
              <div className="border rounded-lg p-4 cursor-pointer hover:border-purple-500">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    📢
                  </div>
                  <span>Marketing</span>
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
            Selecciona el área principal que deseas optimizar. Esto me ayudará a personalizar las automatizaciones para ti.
          </p>
        </div>

        {/* Botones de Navegación */}
        <div className="flex justify-end">
          <button
            onClick={handleButtonClick}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Siguiente
          </button>
        </div>
      </CardBox>
    </div>
  );
};

export default Page;