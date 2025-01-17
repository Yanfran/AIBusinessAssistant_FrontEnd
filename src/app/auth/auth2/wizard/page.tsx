"use client";

import React, { useState } from "react";
import CardBox from "../../../components/shared/CardBox";
import Image from "next/image";
import Link from "next/link";
import { Roboto_Flex, Noto_Sans_Mono } from "next/font/google";
import { useRouter } from "next/navigation";
import { Spinner } from "flowbite-react";
import { createUserDetails } from "@/utils/services/userRegister";

// Fuentes personalizadas
const robotoFlex = Roboto_Flex({ subsets: ["latin"], weight: ["900"] });
const notoSansMono = Noto_Sans_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); 
  const [currentStep, setCurrentStep] = useState(1);
  const [title, setTitle] = useState('¡Conozcamos tu negocio!');
  const [selectedOptions, setSelectedOptions] = useState<{ step1: string[], step2: string[], step3: string[] }>({
      step1: [],
      step2: [],
      step3: [],
    });

  /*const [selectedOptions, setSelectedOptions] = useState<{
    step1: { label: string, category: string }[],
    step2: { label: string, category: string }[],
    step3: { label: string, category: string }[]
  }>({
    step1: [],
    step2: [],
    step3: [],
  });*/

  const handleOptionClick = (step: 'step1' | 'step2'| 'step3', value: string) => {
    setSelectedOptions((prev) => {
      const currentSelections = prev[step];
      const isSelected = currentSelections.includes(value);
      return {
        ...prev,
        [step]: isSelected
          ? currentSelections.filter((option: string) => option !== value) // Deseleccionar
          : [...currentSelections, value], // Seleccionar
      };
    });
  };

  /*const handleOptionClick = (
    step: 'step1' | 'step2' | 'step3',
    value: { label: string, category: string }
  ) => {
    setSelectedOptions((prev) => {
      const currentSelections = prev[step];
      const isSelected = currentSelections.some(
        (option) => option.label === value.label
      );
      return {
        ...prev,
        [step]: isSelected
          ? currentSelections.filter((option) => option.label !== value.label) // Deseleccionar
          : [...currentSelections, value], // Seleccionar
      };
    });
  };*/


  const nextStep = () => {
    setCurrentStep((prev) => {
      const newStep = Math.min(prev + 1, 3);
      updateTitle(newStep); // Cambiar el título según el paso
      return newStep;
    });
  };

  const prevStep = () => {
    setCurrentStep((prev) => {
      const newStep = Math.max(prev - 1, 1);
      updateTitle(newStep); // Cambiar el título según el paso
      return newStep;
    });
  };

  // Función para actualizar el título según el paso
  const updateTitle = (step: number) => {
    if (step === 1) {
      setTitle('¡Conozcamos tu negocio!');
    } else if (step === 2) {
      setTitle('Personalicemos tu experiencia');
    } else if (step === 3) {
      setTitle('¡Último paso para comenzar!');
    }
  };

  // const handleFinish = () => router.push("/dashboard");
  const handleFinish = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true); // Muestra el spinner
      console.log("Form data:", selectedOptions);
      const response = await createUserDetails(selectedOptions);
      console.log("Register successful:", response);
      setIsLoading(false);
      // router.push('/auth/auth2/wizard');
    } catch (error) {
      setIsLoading(false);
      console.error('Error al registrar:', error);
    }

    setTimeout(() => {    
      router.push("/dashboard");
    }, 2000); 
    
  }; 

  return (
    <>
    {/* <CardBox> */}
      <h2 className={`${robotoFlex.className} card-title text-4xl font-semibold mb-4 mt-1 flex justify-center`}>
        {title}
      </h2>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 rounded-lg border-black border-4 shadow-xl relative my-4 sm:my-6 md:my-8">
        <Link href={"#"}>
          <Image className="mr-8 mb-4 mt-4" src="/images/logos/logoia.svg" alt="logo" width={150} height={150} />
        </Link>

        {/* Barra de progreso */}
        <div className="relative w-full bg-gray-200 h-2 rounded mb-6">
          <div className="absolute top-0 left-0 h-2 bg-black rounded" style={{ width: `${(currentStep / 3) * 100}%` }}></div>
        </div>

        {/* Contenido del paso */}
        {currentStep === 1 && (
          <div>
            <p className={`${notoSansMono.className} mb-1 text-sm text-black`}>¿A quién vendes principalmente?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
              {[
                { name: "Empresas (B2B)", svg: "/images/iconos/Office-Building--Streamline-Noto-Emoji.svg" },
                { name: "Consumidores (B2C)", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
                { name: "Gobierno", svg: "/images/iconos/Classical-Building--Streamline-Noto-Emoji.svg" },
              ].map((option) => (
                <div
                  key={option.name}
                  className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl bg-white ${
                    selectedOptions.step1.includes(option.name) ? "bg-zinc-200 border-zinc-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleOptionClick("step1", option.name)}
                >
                  <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                  <span className="text-slate-950">{option.name}</span>
                </div>
              ))}
            </div>

            <p className={`${notoSansMono.className} mb-1 text-sm text-black`}>¿Cuántas personas son en tu equipo?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
              {[
                { name: "1-10", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
                { name: "11-50", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
                { name: "51-200", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
                { name: "201+", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
              ].map((option) => (
                <div
                  key={option.name}
                  className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl bg-white ${
                    selectedOptions.step1.includes(option.name) ? "bg-zinc-200 border-zinc-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleOptionClick("step1", option.name)}
                >
                  <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                  <span className="text-slate-950">{option.name}</span>
                </div>
              ))}
            </div>

            <p className={`${notoSansMono.className} mb-1 text-sm text-black`}>Selecciona tu sector</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
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
                  className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl bg-white ${
                    selectedOptions.step1.includes(option.name) ? "bg-zinc-200 border-zinc-200" : "hover:bg-gray-100"
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
          <div>
            <p className={`${notoSansMono.className} mb-1 text-sm text-black`}>¿Qué quieres lograr?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
              {[
                { name: "Aumentar Ventas", svg: "/images/iconos/Chart-Decreasing--Streamline-Noto-Emoji.svg" },
                { name: "Optimizar Procesos", svg: "/images/iconos/High-Voltage--Streamline-Noto-Emoji.svg" },
                { name: "Mejorar Servicio", svg: "/images/iconos/Handshake-Light-Skin-Tone-Medium-Skin-Tone--Streamline-Noto-Emoji.svg" },
                { name: "Escalar Operaciones", svg: "/images/iconos/Rocket--Streamline-Noto-Emoji.svg" },
                { name: "Reducir Costos", svg: "/images/iconos/Money-Bag--Streamline-Noto-Emoji.svg" },
              ].map((option) => (
                <div
                  key={option.name}
                  className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl bg-white ${
                    selectedOptions.step2.includes(option.name) ? "bg-zinc-200 border-zinc-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleOptionClick("step2", option.name)}
                >
                  <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                  <span className="text-slate-950">{option.name}</span>
                </div>
              ))}
            </div>

            <p className={`${notoSansMono.className} mb-1 text-sm text-black`}>¿Qué área necesita más atención?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
              {[
                { name: "Ventas", svg: "/images/iconos/Briefcase--Streamline-Noto-Emoji.svg" },
                { name: "Marketing", svg: "/images/iconos/Megaphone--Streamline-Noto-Emoji.svg" },
                { name: "Atención Cliente", svg: "/images/iconos/Busts-In-Silhouette--Streamline-Noto-Emoji.svg" },
                { name: "Operaciones", svg: "/images/iconos/Package--Streamline-Noto-Emoji.svg" },
                { name: "Finanzas", svg: "/images/iconos/Credit-Card--Streamline-Noto-Emoji.svg" },
              ].map((option) => (
                <div
                  key={option.name}
                  className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl bg-white ${
                    selectedOptions.step2.includes(option.name) ? "bg-zinc-200 border-zinc-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleOptionClick("step2", option.name)}
                >
                  <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                  <span className="text-slate-950">{option.name}</span>
                </div>
              ))}
            </div>

            <p className={`${notoSansMono.className} mb-1 text-sm text-black`}>¿Qué herramientas usas?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
              {[
                { name: "Gmail/Outlook", svg: "/images/iconos/Incoming-Envelope--Streamline-Noto-Emoji.svg" },
                { name: "WhatsApp Business", svg: "/images/iconos/Speech-Balloon--Streamline-Noto-Emoji.svg" },
                { name: "HubSpot/Salesforce", svg: "/images/iconos/Bar-Chart--Streamline-Noto-Emoji.svg" },
                { name: "Redes Sociales", svg: "/images/iconos/Mobile-Phone--Streamline-Noto-Emoji.svg" },
                { name: "Slack/Teams", svg: "/images/iconos/Memo--Streamline-Noto-Emoji.svg" },
              ].map((option) => (
                <div
                  key={option.name}
                  className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl bg-white ${
                    selectedOptions.step2.includes(option.name) ? "bg-zinc-200 border-zinc-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleOptionClick("step2", option.name)}
                >
                  <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                  <span className="text-slate-950">{option.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <p className={`${notoSansMono.className} mb-1 text-sm text-black`}>¿Qué te gustaría automatizar primero?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
              {[
                { name: "Emails", svg: "/images/iconos/Incoming-Envelope--Streamline-Noto-Emoji.svg" },
                { name: "Chat", svg: "/images/iconos/Speech-Balloon--Streamline-Noto-Emoji.svg" },
                { name: "Reportes", svg: "/images/iconos/Bar-Chart--Streamline-Noto-Emoji.svg" },
                { name: "Calendario", svg: "/images/iconos/Spiral-Calendar--Streamline-Noto-Emoji.svg" },
                { name: "Tareas repetitivas", svg: "/images/iconos/Stopwatch--Streamline-Noto-Emoji.svg" },
              ].map((option) => (
                <div
                  key={option.name}
                  className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl bg-white ${
                    selectedOptions.step3.includes(option.name) ? "bg-zinc-200 border-zinc-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleOptionClick("step3", option.name)}
                >
                  <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                  <span className="text-slate-950">{option.name}</span>
                </div>
              ))}
            </div>

            <p className={`${notoSansMono.className} mb-1 text-sm text-black`}>¿Nivel de automatización deseado?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
              {[
                { name: "Básico: Automatizaciones simples", svg: "/images/iconos/Seedling--Streamline-Noto-Emoji.svg" },
                { name: "Intermedio: Flujos complejos", svg: "/images/iconos/Herb--Streamline-Noto-Emoji.svg" },
                { name: "Avanzado: Todo conectado", svg: "/images/iconos/Deciduous-Tree--Streamline-Noto-Emoji.svg" },
              ].map((option) => (
                <div
                  key={option.name}
                  className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl bg-white ${
                    selectedOptions.step3.includes(option.name) ? "bg-zinc-200 border-zinc-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleOptionClick("step3", option.name)}
                >
                  <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                  <span className="text-slate-950">{option.name}</span>
                </div>
              ))}
            </div>

            <p className={`${notoSansMono.className} mb-1 text-sm text-black`}>¿Cuál es tu experiencia con IA?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
              {[
                { name: "Primera vez", svg: "/images/iconos/Hatching-Chick--Streamline-Noto-Emoji.svg" },
                { name: "Algo de experiencia", svg: "/images/iconos/Front-Facing-Baby-Chick--Streamline-Noto-Emoji.svg" },
                { name: "Usuario avanzado", svg: "/images/iconos/Eagle--Streamline-Noto-Emoji.svg" },
              ].map((option) => (
                <div
                  key={option.name}
                  className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md mb-2 shadow-xl bg-white ${
                    selectedOptions.step3.includes(option.name) ? "bg-zinc-200 border-zinc-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleOptionClick("step3", option.name)}
                >
                  <img src={option.svg} alt={option.name} className="w-12 h-12 object-contain" />
                  <span className="text-slate-950">{option.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botones de navegación */}
        <div className="flex justify-end mb-8">
          {currentStep > 1 && (
            <button className="btn-secondary bg-gray-300 text-gray-600 py-2 px-4 rounded-full hover:bg-gray-400 mr-2" onClick={prevStep}>
              Atrás
            </button>
          )}
          {currentStep < 3 && (
            <button onClick={nextStep} className="btn-primary bg-black text-white py-2 px-4 rounded-full hover:bg-blue-600 flex items-center gap-2" >
              Continue
            </button>
          )}
          {currentStep === 3 && (
            // <button className="btn bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 flex items-center gap-2" onClick={handleFinish}>
            //   Finalizar
            // </button>
            <button 
            className="btn bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 flex items-center gap-2" 
            onClick={handleFinish}
            disabled={isLoading} // Deshabilita el botón mientras se está cargando
          >
            {isLoading ? (
              <>
                <Spinner aria-label="Loading..." size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              'Finalizar'
            )}
          </button>
          )}
        </div>
      </div>
      {/* </CardBox> */}
      </>
  );
};

export default Page;
