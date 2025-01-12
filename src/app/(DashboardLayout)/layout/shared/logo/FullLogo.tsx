"use client";
import React from "react";
import Image from "next/image";
import Logo from "/public/images/logos/logoia.svg";
import Link from "next/link";
const FullLogo = () => {
  return (
    <Link href={"/"}>
      <Image src={Logo} alt="logo" height={50} className="block" />
    </Link>
  );
};

export default FullLogo;
