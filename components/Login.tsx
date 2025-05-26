"use client";

import React, { useState } from "react";
import Image from "next/image";
import router from "next/router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    router.push("/dashboard");
  };

  return (
    <div className=" mx-auto max-w-7xl flex  h-screen">
      <form
        className="flex flex-col max-w-md  p-4  rounded-md gap-5 mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl font-bold text-black">
          M-PESA Acquisition Portal
        </h1>
        <p className="text-gray-500">
          Welcome to M-PESA world of convenience! This Portal provides an
          efficient way to access and manage your sales.
        </p>
        <div>
          <label htmlFor="email" className=" text-sm font-bold text-gray-500">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            name="email"
            className="w-full p-2 border rounded-md text-gray-900"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className=" text-sm font-bold text-gray-500"
          >
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            name="password"
            className="w-full p-2 border rounded-md text-gray-900"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-green-500 text-white rounded-md"
        >
          Login
        </button>
        <button className=" flex justify-end w-full p-2 text-green-500">
          Forgot Password?
        </button>
      </form>
      <div className=" hidden md:flex  items-center justify-center mx-auto">
        <Image src="/saflogo.png" alt="logo" width={400} height={400} />
      </div>
    </div>
  );
};

export default Login;
