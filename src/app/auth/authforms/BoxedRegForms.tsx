"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { createUser } from "@/utils/services/userRegister";

const BoxedAuthRegister = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    keepLoggedIn: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, type, checked, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log('Form data:', formData);
      const response = await createUser(formData);
      console.log("Register successful:", response);
      router.push('/auth/auth2/wizard');
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          sizing="md"
          className="form-control"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email Address" />
        </div>
        <TextInput
          id="email"
          type="email"
          sizing="md"
          className="form-control"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <Label htmlFor="password" value="Password" />
          <Link className="text-xs text-primary" href="/auth/auth2/forgot-password">
            Forgot Password ?
          </Link>
        </div>
        <TextInput
          id="password"
          type="password"
          sizing="md"
          className="form-control"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between my-5">
        <div className="flex items-center gap-2">
          <Checkbox 
            id="keepLoggedIn"
            className="checkbox"
            checked={formData.keepLoggedIn}
            onChange={handleChange}
          />
          <Label
            htmlFor="keepLoggedIn"  
            className="font-medium cursor-pointer"
          >
            Keep me logged in
          </Label>
        </div>
      </div>
      <Button 
        type="submit" 
        className="rounded-md w-full bg-sky dark:bg-sky hover:bg-dark dark:hover:bg-dark"
      >
        Sign Up
      </Button>
    </form>
  );
};

export default BoxedAuthRegister;