"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-end mx-auto  gap-x-7 content-center h-screen max-w-screen-lg md:px-3 lg:px-5">
        <div className=" hidden md:flex justify-start items-center mt-9">
          <Image
            src="/images/auth.png"
            alt="auth-image"
            width={500}
            height={500}
            className=""
          />
        </div>

        <div className="w-full  justify-self-start ">
          <p className="text-4xl text-primary font-bold text-center mb-6">
            Login
          </p>

          <form className="border-4 size-auto rounded-lg py-5 border-primary justify-center flex flex-col px-7">
            <label htmlFor="username" className="font-bold text-xl">
              Username
            </label>
            <input
              type="text"
              className="rounded-md py-3 px-2 border-primary border-2"
              placeholder="username"
              id="username"
              autocomplete="off"
            />
            <label htmlFor="email" className="font-bold text-xl mt-2">
              Email
            </label>
            <input
              type="email"
              className="rounded-md py-3 px-2 border-primary border-2"
              placeholder="email"
              id="email"
            />
            <label htmlFor="password" className="font-bold text-xl mt-2">
              Password
            </label>
            <input
              type="password"
              className="rounded-md py-3 px-2 border-primary border-2"
              placeholder="Password"
              id="password"
            />
            <label htmlFor="confirmpassword" className="font-bold text-xl mt-2">
              Password
            </label>
            <input
              type="password"
              className="rounded-md py-3 px-2 border-primary border-2"
              placeholder="Confirm Password"
              id="confirmpassword"
            />
            <button className="bg-tertiary py-3 rounded-lg mt-3 font-extrabold text-lg">
              Register
            </button>
            <p className="text-center mt-3 text-base text-primary font-light">
              Sudah Punya Akun?{" "}
              <Link href="/login" className="underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
