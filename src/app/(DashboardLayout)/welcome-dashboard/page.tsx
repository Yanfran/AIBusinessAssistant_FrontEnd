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
            <h1 className="text-2xl font-semibold">¡Bienvenido de vuelta!</h1>
            <div className="flex items-center space-x-3 mt-2">
              <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                Usuario Pro
              </span>
              <span className="text-sm text-gray-600">
                4 automatizaciones activas
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Métricas Rápidas */}
        <div className="grid grid-cols-4 gap-4">
          <CardBox className="p-4">
            <div className="text-sm text-gray-600 mb-1">Clientes Atendidos</div>
            <div className="text-2xl font-bold text-purple-600">1,247</div>
          </CardBox>
          <CardBox className="p-4">
            <div className="text-sm text-gray-600 mb-1">Tiempo Ahorrado</div>
            <div className="text-2xl font-bold text-purple-600">47h</div>
          </CardBox>
          <CardBox className="p-4">
            <div className="text-sm text-gray-600 mb-1">Tasa de Respuesta</div>
            <div className="text-2xl font-bold text-purple-600">98%</div>
          </CardBox>
          <CardBox className="p-4">
            <div className="text-sm text-gray-600 mb-1">ROI Total</div>
            <div className="text-2xl font-bold text-purple-600">$4.2k</div>
          </CardBox>
        </div>

        {/* Categorías Principales */}
        <div className="grid grid-cols-3 gap-4">
          {/* Ventas */}
          <CardBox className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-green-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-medium mb-2">Ventas</h3>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600">2 automatizaciones activas</span>
              </div>
            </div>
          </CardBox>

          {/* Marketing */}
          <CardBox className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-green-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📣</span>
              </div>
              <h3 className="font-medium mb-2">Marketing</h3>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600">1 automatización activa</span>
              </div>
            </div>
          </CardBox>

          {/* Operaciones */}
          <CardBox className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-green-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-medium mb-2">Operaciones</h3>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600">1 automatización activa</span>
              </div>
            </div>
          </CardBox>
        </div>

        {/* AI Assistant Pro */}
        <CardBox className="p-6 bg-gradient-to-r from-purple-50 to-white">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              🤖
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="font-medium">AI Assistant Pro</h2>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Premium</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Tengo algunas sugerencias basadas en tus últimas métricas:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <div className="text-sm font-medium mb-2">Oportunidad Detectada</div>
                  <p className="text-sm text-gray-600">Podrías mejorar el tiempo de respuesta en horario nocturno</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <div className="text-sm font-medium mb-2">Optimización Sugerida</div>
                  <p className="text-sm text-gray-600">La automatización de emails tiene margen de mejora</p>
                </div>
              </div>
            </div>
          </div>
        </CardBox>

        {/* Automatizaciones Activas */}
        <div className="grid grid-cols-2 gap-6">
          {/* Customer Follow-up */}
          <CardBox className="p-6 border-2 border-green-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                🚀
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Customer Follow-up Pro</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Activo</span>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Respuestas Automáticas</span>
                    <span className="text-green-600">542</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tiempo Medio</span>
                    <span className="text-green-600">3 min</span>
                  </div>
                </div>
              </div>
            </div>
          </CardBox>

          {/* Lead Generation */}
          <CardBox className="p-6 border-2 border-green-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                ⚡
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Lead Generation Pro</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Activo</span>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Leads Capturados</span>
                    <span className="text-green-600">847</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tasa Conversión</span>
                    <span className="text-green-600">32%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardBox>
        </div>

        {/* Crear Nueva Automatización */}
        <CardBox className="p-6 border-2 border-dashed border-purple-200 hover:border-purple-300 cursor-pointer transition-colors">
          <div className="flex items-center justify-center space-x-2 text-purple-600">
            <span className="text-2xl">+</span>
            <span>Crear Nueva Automatización</span>
          </div>
        </CardBox>
      </div>
    </div>
  );
};

export default Page;