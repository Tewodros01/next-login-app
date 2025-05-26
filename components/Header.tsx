import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-green-500">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">
          <span className="text-primary">M-PESA</span>
        </h1>
        <Image
          src="/saflogo.png"
          alt="logo"
          width={50}
          height={50}
          className="color-white"
        />
        <h1 className="text-2xl font-bold">
          <span className="text-primary"></span>
        </h1>
      </div>
      <div className= "hidden md:flex items-center gap-4 font-bold font-sans">
        <Link href="/login">Applay </Link>
        <Link href="/register">Recomeded</Link>
        <div className="flex items-center px-4 py-2 text-green-500 gap-4 bg-white border rounded-md">
          <Link href="/dashboard">LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
