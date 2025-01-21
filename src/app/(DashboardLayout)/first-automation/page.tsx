"use client";

import React, { useState } from 'react';
import CardBox from '../../components/shared/CardBox';

const PreAutomationEntry = () => {
  const [showWizard, setShowWizard] = useState(false);

  return (
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
            onClick={() => setShowWizard(true)}
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
  );
};

export default PreAutomationEntry;