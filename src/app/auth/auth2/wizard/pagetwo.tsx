"use client";

import React, { useState } from "react";
import CardBox from "../../../components/shared/CardBox";
import Image from "next/image";
import Logo from "/images/logos/logo.svg";
import Link from "next/link";
import { Roboto_Flex, Noto_Sans_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react/dist/iconify.js";


const robotoFlex = Roboto_Flex({ subsets: ["latin"], weight: ["900", "900"] });
const notoSansMono = Noto_Sans_Mono({ subsets: ["latin"], weight: ["400", "700"] });


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

  // Redirige a /dashboard al llegar al último paso

  const handleFinish = () => {
    const router = useRouter();
    // router.push("/dashboard");
  };

  return (
    <CardBox className="">
      <h2 className={`${robotoFlex.className} card-title text-5xl font-semibold mb-7 flex justify-center`}>!Conozcamos tu negocio¡</h2>
      <div className="container mx-auto px-8 rounded-lg border-black border-4">
        {/* Logo */}
        <Link href={"#"}>
          <Image style={{ marginLeft: -20 }} className="mr-8 mb-5 mt-8" src="/images/logos/logoia.svg" alt="logo" width={200} height={200} />
        </Link>

        {/* Progress Bar */}
        <div className="relative w-full bg-gray-200 h-2 rounded mb-6">
          <div
            className="absolute top-0 left-0 h-2 bg-black rounded"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>


        {/* Step Content */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {currentStep === 1 && (
            <div className="col-span-2">

              {/* <h2 className={`${robotoFlex.className} mb-1 card-title`}>Conozcamos tu negocio</h2> */}
              <p className={`${notoSansMono.className} mb-4 text-base text-black`}>¿A quién vendes principalmente?</p>
              <div className="grid grid-cols-4 gap-4 mb-10">
                {[
                  { name: "Empresas (B2B)", svg: "/images/iconos/Office-Building--Streamline-Noto-Emoji.svg" },
                  { name: "Consumidores (B2C)", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
                  { name: "Gobierno", svg: "/images/iconos/Classical-Building--Streamline-Noto-Emoji.svg" },
                ].map((option) => (
                  <div
                    key={option.name}
                    className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl border-grey bg-white ${selectedOptions.step1.includes(option.name)
                      ? "bg-zinc-200 border-zinc-200"
                      : "hover:bg-gray-100"
                      }`}
                    onClick={() => handleOptionClick("step1", option.name)}
                  >
                    <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                    <span className="text-slate-950">{option.name}</span>
                  </div>
                ))}
              </div>

              <p className={`${notoSansMono.className} mb-4 text-base text-black`}>¿Cuántas personas son en tu equipo?</p>
              <div className="grid grid-cols-4 gap-4 mb-10">
                {[
                  { name: "1-10", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
                  { name: "11-50", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
                  { name: "51-200", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
                  { name: "201+", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
                ].map((option) => (
                  <div
                    key={option.name}
                    className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl border-grey bg-white ${selectedOptions.step1.includes(option.name)
                      ? "bg-zinc-200 border-zinc-200"
                      : "hover:bg-gray-100"
                      }`}
                    onClick={() => handleOptionClick("step1", option.name)}
                  >
                    <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                    <span className="text-slate-950">{option.name}</span>
                  </div>
                ))}
              </div>

              <p className={`${notoSansMono.className} mb-4 text-base text-black`}>Selecciona tu sector</p>
              <div className="grid grid-cols-4 gap-4 mb-10">
                {[
                  { name: "Tecnología", svg: "/images/iconos/Laptop--Streamline-Noto-Emoji.svg" },
                  { name: "E-commerce", svg: "/images/iconos/Shopping-Bags--Streamline-Noto-Emoji.svg" },
                  { name: "Manufactura", svg: "/images/iconos/Factory--Streamline-Noto-Emoji.svg" },
                  { name: "Servicios", svg: "/images/iconos/Briefcase--Streamline-Noto-Emoji.svg" },
                  { name: "Software", svg: "/images/iconos/Mobile-Phone--Streamline-Noto-Emoji.svg" },
                  { name: "Retail", svg: "/images/iconos/Convenience-Store--Streamline-Noto-Emoji%20(1).svg" },
                  { name: "Consultoría", svg: "/images/iconos/Bar-Chart--Streamline-Noto-Emoji.svg" },
                  { name: "AI/ML", svg: "/images/iconos/Robot--Streamline-Noto-Emoji.svg" },
                ].map((option) => (
                  <div
                    key={option.name}
                    className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl border-grey bg-white ${selectedOptions.step1.includes(option.name)
                      ? "bg-zinc-200 border-zinc-200"
                      : "hover:bg-gray-100"
                      }`}
                    onClick={() => handleOptionClick("step1", option.name)}
                  >
                    <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                    <span className="text-slate-950">{option.name}</span>
                  </div>
                ))}
              </div>

            </div>
          )}

          {currentStep === 2 && (
            <div className="col-span-2">
              <h2 className={`${robotoFlex.className} mb-1 card-title`}>Personalicemos tu experiencia</h2>
              <p className={`${notoSansMono.className} mb-4 text-base text-black`}>¿Qué quieres lograr?</p>
              <div className="grid grid-cols-4 gap-4 mb-10">
                {[
                  { name: "Aumentar Ventas", svg: "/images/iconos/Chart-Decreasing--Streamline-Noto-Emoji.svg" },
                  { name: "Optimizar Procesos", svg: "/images/iconos/High-Voltage--Streamline-Noto-Emoji.svg" },
                  { name: "Mejorar Servicio", svg: "/images/iconos/Handshake-Light-Skin-Tone-Medium-Skin-Tone--Streamline-Noto-Emoji.svg" },
                  { name: "Escalar Operaciones", svg: "/images/iconos/Rocket--Streamline-Noto-Emoji.svg" },
                  { name: "Reducir Costos", svg: "/images/iconos/Money-Bag--Streamline-Noto-Emoji.svg" },
                ].map((option) => (
                  <div
                    key={option.name}
                    className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl border-grey bg-white ${selectedOptions.step1.includes(option.name)
                      ? "bg-zinc-200 border-zinc-200"
                      : "hover:bg-gray-100"
                      }`}
                    onClick={() => handleOptionClick("step1", option.name)}
                  >
                    <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                    <span className="text-slate-950">{option.name}</span>
                  </div>
                ))}
              </div>

              <p className={`${notoSansMono.className} mb-4 text-base text-black`}>¿Qué área necesita más atención?</p>
              <div className="grid grid-cols-4 gap-4 mb-10">
                {[
                  { name: "Ventas", svg: "/images/iconos/Briefcase--Streamline-Noto-Emoji.svg" },
                  { name: "Marketing", svg: "/images/iconos/Megaphone--Streamline-Noto-Emoji.svg" },
                  { name: "Atención Cliente", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
                  { name: "Operaciones", svg: "/images/iconos/Package--Streamline-Noto-Emoji.svg" },
                  { name: "Finanzas", svg: "/images/iconos/Credit-Card--Streamline-Noto-Emoji.svg" },
                ].map((option) => (
                  <div
                    key={option.name}
                    className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl border-grey bg-white ${selectedOptions.step1.includes(option.name)
                      ? "bg-zinc-200 border-zinc-200"
                      : "hover:bg-gray-100"
                      }`}
                    onClick={() => handleOptionClick("step1", option.name)}
                  >
                    <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                    <span className="text-slate-950">{option.name}</span>
                  </div>
                ))}
              </div>

              <p className={`${notoSansMono.className} mb-4 text-base text-black`}>¿Qué herramientas usas?</p>
              <div className="grid grid-cols-4 gap-4 mb-10">
                {[
                  { name: "Gmail/Outlook", svg: "/images/iconos/Incoming-Envelope--Streamline-Noto-Emoji.svg" },
                  { name: "WhatsApp Business", svg: "/images/iconos/Speech-Balloon--Streamline-Noto-Emoji.svg" },
                  { name: "HubSpot/Salesforce", svg: "/images/iconos/Bar-Chart--Streamline-Noto-Emoji.svg" },
                  { name: "Redes Sociales", svg: "/images/iconos/Mobile-Phone--Streamline-Noto-Emoji.svg" },
                  { name: "Slack/Teams", svg: "/images/iconos/Memo--Streamline-Noto-Emoji.svg" },
                ].map((option) => (
                  <div
                    key={option.name}
                    className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl border-grey bg-white ${selectedOptions.step1.includes(option.name)
                      ? "bg-zinc-200 border-zinc-200"
                      : "hover:bg-gray-100"
                      }`}
                    onClick={() => handleOptionClick("step1", option.name)}
                  >
                    <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                    <span className="text-slate-950">{option.name}</span>
                  </div>
                ))}
              </div>

            </div>
          )}

          {currentStep === 3 && (
            <div className="col-span-2">

              <h2 className={`${robotoFlex.className} mb-1 card-title`}>¡Último paso para comenzar!</h2>
              <p className={`${notoSansMono.className} mb-4 text-base text-black`}>¿Qué te gustaría automatizar primero?</p>
              <div className="grid grid-cols-4 gap-4 mb-10">
                {[
                  { name: "Emails", svg: "/images/iconos/Incoming-Envelope--Streamline-Noto-Emoji.svg" },
                  { name: "Chat", svg: "/images/iconos/Speech-Balloon--Streamline-Noto-Emoji.svg" },
                  { name: "Reportes", svg: "/images/iconos/Bar-Chart--Streamline-Noto-Emoji.svg" },
                  { name: "Calendario", svg: "/images/iconos/Spiral-Calendar--Streamline-Noto-Emoji.svg" },
                  { name: "Tareas repetitivas", svg: "/images/iconos/Stopwatch--Streamline-Noto-Emoji.svg" },
                ].map((option) => (
                  <div
                    key={option.name}
                    className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl border-grey bg-white ${selectedOptions.step1.includes(option.name)
                      ? "bg-zinc-200 border-zinc-200"
                      : "hover:bg-gray-100"
                      }`}
                    onClick={() => handleOptionClick("step1", option.name)}
                  >
                    <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                    <span className="text-slate-950">{option.name}</span>
                  </div>
                ))}
              </div>

              <p className={`${notoSansMono.className} mb-4 text-base text-black`}>¿Nivel de automatización deseado?</p>
              <div className="grid grid-cols-4 gap-4 mb-10">
                {[
                  { name: "Básico: Automatizaciones simples", svg: "/images/iconos/Seedling--Streamline-Noto-Emoji.svg" },
                  { name: "Intermedio: Flujos complejos", svg: "/images/iconos/Herb--Streamline-Noto-Emoji.svg" },
                  { name: "Avanzado: Todo conectado", svg: "/images/iconos/Deciduous-Tree--Streamline-Noto-Emoji.svg" },
                ].map((option) => (
                  <div
                    key={option.name}
                    className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl border-grey bg-white ${selectedOptions.step1.includes(option.name)
                      ? "bg-zinc-200 border-zinc-200"
                      : "hover:bg-gray-100"
                      }`}
                    onClick={() => handleOptionClick("step1", option.name)}
                  >
                    <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                    <span className="text-slate-950">{option.name}</span>
                  </div>
                ))}
              </div>

              <p className={`${notoSansMono.className} mb-4 text-base text-black`}>¿Qué te gustaría automatizar primero?</p>
              <div className="grid grid-cols-4 gap-4 mb-10">
                {[
                  { name: "Primera vez", svg: "/images/iconos/Hatching-Chick--Streamline-Noto-Emoji.svg" },
                  { name: "Algo de experiencia", svg: "/images/iconos/Front-Facing-Baby-Chick--Streamline-Noto-Emoji.svg" },
                  { name: "Usuario avanzado", svg: "/images/iconos/Eagle--Streamline-Noto-Emoji.svg" },
                ].map((option) => (
                  <div
                    key={option.name}
                    className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl border-grey bg-white ${selectedOptions.step1.includes(option.name)
                      ? "bg-zinc-200 border-zinc-200"
                      : "hover:bg-gray-100"
                      }`}
                    onClick={() => handleOptionClick("step1", option.name)}
                  >
                    <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                    <span className="text-slate-950">{option.name}</span>
                  </div>
                ))}
              </div>


            </div>
          )}

        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mb-8">
        {currentStep > 1 && (
          <button
            className="btn-secondary bg-gray-300 text-gray-600 py-2 px-4 rounded-full hover:bg-gray-400 mr-2"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Anterior
          </button>
          )}
          <button
            className="btn-primary bg-black text-white py-2 px-4 rounded-full hover:bg-blue-600 flex items-center gap-2"
            onClick={() => {
              if (currentStep === 3) {
                handleFinish(); // Llamar a handleFinish para redirigir a /dashboard
              } else {
                nextStep(); // Continuar con el siguiente paso
              }
            }}
            disabled={currentStep === 3}
          >
            Continue <Icon icon="solar:arrow-right-outline" width="24" height="24" />
          </button>
        </div>


      </div>
    </CardBox>


  );
};

export default Page;
