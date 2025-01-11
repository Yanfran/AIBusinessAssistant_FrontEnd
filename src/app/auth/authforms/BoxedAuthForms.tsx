"use client";

import { Button, Checkbox, Label, TextInput, Toast, Spinner } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { loginUser } from "@/utils/services/authService";
import { LoginForm } from "@/utils/types/authTypes";
import { HiExclamation } from "react-icons/hi";

const BoxedAuthLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); 

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
      setIsLoading(true);
      const response = await loginUser(formData);
      console.log(response)
      if (response.status === false) {
        setErrorMessage(response.message);
        setIsLoading(false);
      } else {
        console.log("Login successful:", response);
        setErrorMessage(response.message);
        router.push('/dashboard');
        // setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        console.error("Error during login:", (error as any).response?.data || error.message);
        setErrorMessage(error.message);
      } else {
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <>
      {errorMessage && (
        <div className="fixed top-4 right-4 z-50">
        <Toast color="dark" className="bg-dark dark:bg-dark dark:text-white-200 text-white-500">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
            <HiExclamation className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">
            {errorMessage}
          </div>
          <Toast.Toggle onClick={() => setErrorMessage(null)} />
        </Toast>
      </div>
      )}
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
          {isLoading ? (
            <>
              <Spinner aria-label="Loading..." size="sm" />
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            'Sign in'
          )}
        </Button>

        {/* <Button href="/dashboard" as={Link} className="rounded-md w-full bg-sky dark:bg-sky  hover:bg-dark dark:hover:bg-dark">
          Sign in
        </Button> */}
      </form>
    </>
  );
};

export default BoxedAuthLogin;
