"use client";

import { CustomizerContext } from "@/app/context/CustomizerContext";

import { Card } from "flowbite-react";
import React, { useContext } from "react";


interface MyAppProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const CardBox: React.FC<MyAppProps> = ({ children, className, onClick }) => {
  const { activeMode, isCardShadow, isBorderRadius } = useContext(CustomizerContext);
  return (
    <Card className={`card p-[30px]  ${className} ${isCardShadow ? ' shadow-md dark:shadow-none' : 'shadow-none border border-ld'} `}
      style={{
        borderRadius: `${isBorderRadius}px`,
      }}
      onClick={onClick} >{children}</Card>
  );

};
export default CardBox;
