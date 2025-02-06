"use client";

import React, { useState } from 'react';
import CardBox from '../../components/shared/CardBox';
import { useRouter } from 'next/navigation';

const Page = () => {

  const router = useRouter();
  const [showWizard, setShowWizard] = useState(false);
  
  const handleButtonClick = () => {
    setShowWizard(true);
    router.push('/steps-customer-follow-up-one');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-semibold">¡Beneficio Activado!</h1>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                47:59:32 restantes
              </span>
            </div>
            <p className="text-gray-600 mt-2">
              Comencemos a optimizar tu negocio
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* AI Assistant Guide */}
        <CardBox className="p-6 bg-gradient-to-r from-purple-50 to-white border-l-4 border-purple-500">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              🤖
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="font-semibold">AI Assistant</h2>
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                  Guía Activa
                </span>
              </div>
              <p className="text-gray-600 mb-2">
                Te guiaré en la configuración de tus automatizaciones premium. 
                Recomiendo empezar con Customer Follow-up para solucionar inmediatamente 
                la pérdida de clientes.
              </p>
              <div className="text-sm text-purple-600">
                Paso 1 de 3: Selecciona la automatización para comenzar
              </div>
            </div>
          </div>
        </CardBox>

        {/* Plantillas Desbloqueadas */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Customer Follow-up Premium */}
          <CardBox className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                🚀
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-medium">Customer Follow-up Premium</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    Recomendado
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automatización inteligente de seguimiento de clientes
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">✓</span>
                    <span>Respuestas automáticas en 5 minutos</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">✓</span>
                    <span>Seguimiento personalizado</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">✓</span>
                    <span>Dashboard de resultados</span>
                  </div>
                </div>
                <button onClick={handleButtonClick} className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
                  Comenzar Configuración →
                </button>
              </div>
            </div>
          </CardBox>

          {/* Lead Generation Premium */}
          <CardBox className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                ⚡
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-medium">Lead Generation Premium</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Sistema avanzado de captura de leads
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">✓</span>
                    <span>Forms con AI Qualification</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">✓</span>
                    <span>Scoring automático</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">✓</span>
                    <span>Integración con CRM</span>
                  </div>
                </div>
                <button onClick={handleButtonClick} className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
                  Comenzar Configuración →
                </button>
              </div>
            </div>
          </CardBox>
        </div>

        {/* Progress Indicator */}
        <CardBox className="p-6 bg-blue-50">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              ⏱️
            </div>
            <div>
              <h3 className="font-medium mb-2">Aprovecha al máximo tu beneficio</h3>
              <p className="text-sm text-gray-600">
                Tienes acceso premium por 48 horas. Configura tus automatizaciones ahora 
                y mantén todas las optimizaciones incluso después de que expire el beneficio.
              </p>
              <div className="mt-4 w-full bg-blue-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
              </div>
            </div>
          </div>
        </CardBox>
      </div>
    </div>
  );
};

export default Page;