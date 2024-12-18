"use client";

import React, { useState } from "react";
import CardBox from "../components/shared/CardBox";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{
    step1: string[];
    step2: string[];
    step3: string[];
  }>({
    step1: [],
    step2: [],
    step3: [],
  });

  const handleOptionClick = (step: "step1" | "step2" | "step3", value: string) => {
    setSelectedOptions((prev) => {
      const currentSelections = prev[step];
      const isSelected = currentSelections.includes(value);
  
      return {
        ...prev,
        [step]: isSelected
          ? currentSelections.filter((option) => option !== value) // Deseleccionar
          : [...currentSelections, value], // Seleccionar
      };
    });
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <CardBox>
      <h5 className="card-title text-xl font-semibold mb-4">Wizard</h5>

      {/* Progress indicator */}
      <div className="mb-4 flex justify-between">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              step === currentStep ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
            }`}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="mb-6">
        {currentStep === 1 && (
          <div>
            <p className="mb-4">Selecciona opciones para el Paso 1:</p>
            {["Opción A", "Opción B", "Opción C"].map((option) => (
              <div
                key={option}
                className={`cursor-pointer p-3 border rounded mb-2 ${
                  selectedOptions.step1.includes(option)
                    ? "bg-blue-100 border-blue-500"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleOptionClick("step1", option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <p className="mb-4">Selecciona opciones para el Paso 2:</p>
            {["Opción D", "Opción E", "Opción F"].map((option) => (
              <div
                key={option}
                className={`cursor-pointer p-3 border rounded mb-2 ${
                  selectedOptions.step2.includes(option)
                    ? "bg-blue-100 border-blue-500"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleOptionClick("step2", option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <p className="mb-4">Selecciona opciones para el Paso 3:</p>
            {["Opción G", "Opción H", "Opción I"].map((option) => (
              <div
                key={option}
                className={`cursor-pointer p-3 border rounded mb-2 ${
                  selectedOptions.step3.includes(option)
                    ? "bg-blue-100 border-blue-500"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleOptionClick("step3", option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          className="btn-secondary bg-gray-300 text-gray-600 py-2 px-4 rounded hover:bg-gray-400"
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          Anterior
        </button>
        <button
          className="btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={nextStep}
          disabled={currentStep === 3}
        >
          Siguiente
        </button>
      </div>
    </CardBox>
  );
};

export default Page;
