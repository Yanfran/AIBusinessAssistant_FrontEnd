"use client";

import React, { useState } from 'react';
import CardBox from '../../components/shared/CardBox';
import { useRouter } from 'next/navigation';

const Page = () => {

  const router = useRouter();
  const [showWizard, setShowWizard] = useState(false);

  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = 4;
  
  const handleButtonClick = () => {
    setShowWizard(true);
    router.push('/steps-customer-follow-up-three');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header con Progreso */}
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
            <h2 className="text-xl font-semibold mb-6">Configura tu secuencia de seguimiento</h2>

            {/* Timeline de Acciones */}
            <div className="space-y-6">
              {/* Email 1 */}
              <div className="border rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    1
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Email de Bienvenida</h3>
                      <select className="border rounded-md p-1 text-sm">
                        <option>Inmediatamente</option>
                        <option>1 hora después</option>
                        <option>24 horas después</option>
                      </select>
                    </div>
                    <select className="w-full border rounded-md p-2">
                      <option>Template: Bienvenida Personalizada</option>
                      <option>Template: Introducción Formal</option>
                      <option>Template: Mensaje Casual</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Email 2 */}
              <div className="border rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    2
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Solicitud de Feedback</h3>
                      <select className="border rounded-md p-1 text-sm">
                        <option>48 horas después</option>
                        <option>3 días después</option>
                        <option>1 semana después</option>
                      </select>
                    </div>
                    <select className="w-full border rounded-md p-2">
                      <option>Template: Pedido de Feedback</option>
                      <option>Template: Encuesta de Satisfacción</option>
                    </select>
                    <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-700">
                      Condición: Si no hay respuesta al primer email
                    </div>
                  </div>
                </div>
              </div>

              {/* Email 3 */}
              <div className="border rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    3
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Recordatorio Final</h3>
                      <select className="border rounded-md p-1 text-sm">
                        <option>7 días después</option>
                        <option>10 días después</option>
                      </select>
                    </div>
                    <select className="w-full border rounded-md p-2">
                      <option>Template: Último Seguimiento</option>
                      <option>Template: Oferta Especial</option>
                    </select>
                    <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-700">
                      Condición: Si no hay interacción previa
                    </div>
                  </div>
                </div>
              </div>

              {/* Añadir Paso */}
              <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-purple-500 hover:text-purple-500 transition-colors">
                + Añadir otro paso
              </button>
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
                  He configurado una secuencia optimizada basada en patrones exitosos 
                  de tu industria. Para tu sector, el primer seguimiento a las 48 horas 
                  muestra mejores resultados.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Recomendación</h4>
                <p className="text-sm text-yellow-700">
                  Según los datos de tu CRM, los clientes suelen responder mejor entre 
                  2-4PM. He ajustado los tiempos de envío considerando esto.
                </p>
              </div>

              <div className="space-y-3 mt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Templates personalizados listos
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                    →
                  </span>
                  Siguiente: Configurar condiciones
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