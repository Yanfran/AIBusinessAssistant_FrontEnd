"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { loginUser } from "@/utils/services/authService";
import { LoginForm } from "@/utils/types/authTypes";

const BoxedAuthLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      console.log("Login successful:", response);
      router.push('/dashboard');

    } catch (error) {
      if (error instanceof Error) {
        console.error("Error during login:", (error as any).response?.data || error.message);
      } else {
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="Email Address" value="Email Address" />
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
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <Label htmlFor="userpwd" value="Password" />
            <Link className="text-xs text-primary" href={'/auth/auth2/forgot-password'}>Forgot Password ?</Link>
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
            <Checkbox id="accept" className="checkbox" defaultChecked/>
            <Label
              htmlFor="accept"  
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
          Sign in
        </Button>

        {/* <Button href="/dashboard" as={Link} className="rounded-md w-full bg-sky dark:bg-sky  hover:bg-dark dark:hover:bg-dark">
          Sign in
        </Button> */}
      </form>
    </>
  );
};

export default BoxedAuthLogin;
