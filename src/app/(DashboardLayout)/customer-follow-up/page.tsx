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
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Customer Follow-up</h1>
          <p className="text-sm text-green-600 flex items-center mt-1">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
            Activo y funcionando
          </p>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          Editar Configuración
        </button>
      </div>

      <div className="flex gap-6">
        {/* Panel Principal (70%) */}
        <div className="w-[70%] space-y-6">
          {/* Métricas Principales */}
          <div className="grid grid-cols-3 gap-4">
            <CardBox className="p-4">
              <h3 className="text-sm text-gray-500">Emails Enviados</h3>
              <p className="text-2xl font-semibold mt-1">48</p>
              <p className="text-xs text-green-600 mt-1">↑ 12% vs ayer</p>
            </CardBox>
            <CardBox className="p-4">
              <h3 className="text-sm text-gray-500">Tasa de Apertura</h3>
              <p className="text-2xl font-semibold mt-1">67%</p>
              <p className="text-xs text-green-600 mt-1">↑ 5% vs promedio</p>
            </CardBox>
            <CardBox className="p-4">
              <h3 className="text-sm text-gray-500">Tasa de Respuesta</h3>
              <p className="text-2xl font-semibold mt-1">42%</p>
              <p className="text-xs text-green-600 mt-1">↑ 8% vs promedio</p>
            </CardBox>
          </div>

          {/* Actividad Reciente */}
          <CardBox className="p-6">
            <h2 className="font-semibold mb-4">Actividad Reciente</h2>
            <div className="space-y-4">
              {/* Actividad 1 */}
              <div className="flex items-start space-x-3 pb-4 border-b">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  ✉️
                </div>
                <div>
                  <p className="font-medium">Email de bienvenida enviado</p>
                  <p className="text-sm text-gray-500">cliente@email.com</p>
                  <p className="text-xs text-gray-400 mt-1">Hace 5 minutos</p>
                </div>
              </div>

              {/* Actividad 2 */}
              <div className="flex items-start space-x-3 pb-4 border-b">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  👀
                </div>
                <div>
                  <p className="font-medium">Email abierto</p>
                  <p className="text-sm text-gray-500">otro@email.com</p>
                  <p className="text-xs text-gray-400 mt-1">Hace 15 minutos</p>
                </div>
              </div>

              {/* Actividad 3 */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  ↩️
                </div>
                <div>
                  <p className="font-medium">Respuesta recibida</p>
                  <p className="text-sm text-gray-500">nuevo@email.com</p>
                  <p className="text-xs text-gray-400 mt-1">Hace 30 minutos</p>
                </div>
              </div>
            </div>
          </CardBox>

          {/* Estado de Secuencia */}
          <CardBox className="p-6">
            <h2 className="font-semibold mb-4">Estado de la Secuencia</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">1</div>
                  <div>
                    <p className="font-medium">Email de Bienvenida</p>
                    <p className="text-sm text-gray-500">48 enviados • 32 abiertos</p>
                  </div>
                </div>
                <span className="text-green-600">67% efectividad</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">2</div>
                  <div>
                    <p className="font-medium">Solicitud de Feedback</p>
                    <p className="text-sm text-gray-500">25 enviados • 15 abiertos</p>
                  </div>
                </div>
                <span className="text-green-600">60% efectividad</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">3</div>
                  <div>
                    <p className="font-medium">Recordatorio Final</p>
                    <p className="text-sm text-gray-500">10 enviados • 5 abiertos</p>
                  </div>
                </div>
                <span className="text-green-600">50% efectividad</span>
              </div>
            </div>
          </CardBox>
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
                <p className="text-sm text-gray-500">Análisis en tiempo real</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  Tu automatización está funcionando mejor que el promedio de tu industria. 
                  La tasa de apertura del 67% es especialmente destacable.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Optimización Sugerida</h4>
                <p className="text-sm text-yellow-700">
                  He notado que los emails enviados entre 2-4 PM tienen mejor tasa 
                  de apertura. ¿Quieres que ajuste el horario de envío?
                </p>
                <button className="mt-2 text-sm text-yellow-800 font-medium">
                  Aplicar Optimización →
                </button>
              </div>

              <div className="space-y-3 mt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Rendimiento óptimo
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Servicios conectados OK
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                    !
                  </span>
                  1 optimización disponible
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