"use client";

import FundWithdrawalForm from "@/components/FundForm";
import { Check, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import *as yup from "yup";

const page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={` bg-gray-900 w-64 absolute left-0 inset-y-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out shadow-md z-50 md:translate-x-0 md:relative`}
      >
        <div className="md:hidden flex justify-end px-4">
          <button onClick={() => setSidebarOpen(false)} className="text-2xl">
            <X />
          </button>
        </div>

        <nav>
          <div className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 border-b">
            <div className="flex items-center font-bold space-x-2 px-4 py-2  rounded">
              <span>OP Partner Managment</span>
            </div>
          </div>
          <Link
            href="#"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 hover:text-black rounded"
          >
            <Menu /> <span>Dashboard</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200  hover:text-black rounded"
          >
            <Menu /> <span>OnBording</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 hover:text-black rounded"
          >
            <Menu /> <span>View</span>
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 bg-gray-50 shadow-md p-4 flex items-center justify-between">
          <button
            className="md:hidden text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </button>
          <h1 className="text-xl font-bold"> Dashboard</h1>
          <div className="flex items-center space-x-4 border rounded-full p-2">
            <User className="w-10 h-10" />
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex  flex-col gap-4  bg-white border rounded-md p-4">
            <ol className="flex items-center w-full">
              <li className="flex w-full items-center text-black">
                <span className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full ">
                  <Check className=" h-2 w-2"/> 
                </span>
                Check Merchant
              </li>
              <li className="flex w-full items-center text-black  ">
                <span className="flex items-center justify-center w-5 h-5 bg-green-50 rounded-full ">
                  <Check  className=" h-4 w-4"/>
                </span>
                Distribution Detail
              </li>
              <li className="flex w-full items-center text-black   ">
                <span className="flex items-center justify-center w-5 h-5 bg-green-50 rounded-full ">
                  <Check className=" h-2 w-2"/>
                </span>
                Business Type
              </li>
              <li className="flex w-full items-center text-black   ">
                <span className="flex items-center justify-center w-5 h-5 bg-green-50 rounded-full ">
                  <Check className=" h-2 w-2 text-black"/>
                </span>
                Partner Onboarding
              </li>
                <li className="flex w-full items-center text-black">
                  <span className="flex items-center justify-center w-5 h-5 bg-green-50 rounded-full ">
                    <Check className=" h-2 w-2 text-black"/>
                  </span>
                  Business Detail
                </li>
                <li className="flex w-full items-center text-black">
                  <span className="flex items-center justify-center w-5 h-5 bg-green-50 rounded-full ">
                    <Check className=" h-2 w-2 text-black"/>
                  </span>
                  Fund Withdraw
                </li>
                
            </ol>

            <FundWithdrawalForm />
            <div className="flex justify-between f gap-3">
              <div className="flex items-center gap-2">
                <div className=" flex gap-2 rounded-md border p-2">
                  <input
                    type="checkbox"
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  />
                  <p className="text-sm font-bold text-gray-500">Bank</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                  Back
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
