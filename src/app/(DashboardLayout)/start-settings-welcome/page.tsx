"use client";

import React, { useState } from 'react';
import CardBox from '../../components/shared/CardBox';
import { useRouter } from 'next/navigation';

const Page = () => {

  const router = useRouter();
  const [showWizard, setShowWizard] = useState(false);
  
  const handleButtonClick = () => {
    setShowWizard(true);
    router.push('/start-settings-benefit');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-semibold">¡Bienvenido a tu Dashboard!</h1>
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-xs px-3 py-1 rounded-full">
                Regalo Especial Disponible 🎁
              </span>
            </div>
            <p className="text-gray-600 mt-2">
              Hemos analizado tu e-commerce y encontrado oportunidades importantes
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* AI Análisis Card */}
        <CardBox className="p-6 bg-gradient-to-br from-red-50 to-white border-l-4 border-red-500">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              ⚠️
            </div>
            <div>
              <h3 className="font-medium text-red-700 mb-2">Problemas Críticos Detectados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500">•</span>
                      <span>Pierdes 45% de clientes por falta de seguimiento</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500">•</span>
                      <span>72h promedio en responder consultas</span>
                    </li>
                  </ul>
                </div>
                <div className="text-sm text-red-600 font-medium">
                  Pérdida estimada: $2,000/mes
                </div>
              </div>
            </div>
          </div>
        </CardBox>

        {/* Plantillas en línea */}
        <div className="flex gap-6">
          {/* Customer Follow-up */}
          <CardBox className="flex-1 p-6 border-2 border-purple-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                🚀
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-medium">Customer Follow-up</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    Recomendado #1
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automatiza respuestas y seguimiento de clientes
                </p>
                <div className="text-sm text-green-600 mb-3">
                  Impacto: +47% ventas
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 text-sm">
                  Probar Gratis →
                </button>
              </div>
            </div>
          </CardBox>

          {/* Lead Generation */}
          <CardBox className="flex-1 p-6 border-2 border-purple-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                ⚡
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-medium">Lead Generation</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    Recomendado #2
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Captura y cualifica leads automáticamente
                </p>
                <div className="text-sm text-green-600 mb-3">
                  Impacto: +63% leads
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 text-sm">
                  Probar Gratis →
                </button>
              </div>
            </div>
          </CardBox>
        </div>

        {/* Regalo de Bienvenida CardBox */}
        <CardBox className="p-6 bg-gradient-to-r from-purple-50 to-white">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              🎁
            </div>
            <div>
              <h3 className="font-medium mb-2">Acelera tu crecimiento</h3>
              <p className="text-sm text-gray-600 mb-4">
                Activa tu regalo de bienvenida y obtén:
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg text-center border border-purple-100">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    ⚡
                  </div>
                  <div className="text-sm font-medium">48h Premium</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center border border-purple-100">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    🤖
                  </div>
                  <div className="text-sm font-medium">Setup AI</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center border border-purple-100">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    📊
                  </div>
                  <div className="text-sm font-medium">ROI Report</div>
                </div>
              </div>
              <button onClick={handleButtonClick} className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg hover:from-purple-700 hover:to-purple-800">
                Activar Regalo de Bienvenida
              </button>
            </div>
          </div>
        </CardBox>

        {/* Why CardBox */}
        <CardBox className="p-6 bg-blue-50">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              💡
            </div>
            <div>
              <h3 className="font-medium mb-2">¿Por qué estas recomendaciones?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Basado en el análisis de tu e-commerce, estas automatizaciones resolverán tus problemas más críticos:
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-700">1</span>
                    <span>Respuesta inmediata a clientes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-700">2</span>
                    <span>Seguimiento automático</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-700">3</span>
                    <span>Captura proactiva de leads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-700">4</span>
                    <span>Cualificación automática</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBox>
      </div>
    </div>
  );
};

export default Page;