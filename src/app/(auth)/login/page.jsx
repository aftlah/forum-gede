"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="grid content-center h-screen max-w-screen-lg grid-cols-1 mx-auto md:grid-cols-2 justify-items-end gap-x-7">
        <div className="items-center justify-end hidden  md:flex mt-9">
            <Image
              src="/images/auth.png"
              alt="auth-image"
              width={500}
              height={500}
              className=""
            />
        </div>

        <div className="w-full justify-self-start ">
          <p className="mb-6 text-4xl font-bold text-center text-primary">Login</p>
          <form className="flex flex-col justify-center py-10 border-4 rounded-lg size-auto border-primary px-7">
            <label htmlFor="email" className="text-xl font-bold">Email</label>
            <input
              type="text"
              className="px-2 py-3 border-2 rounded-md border-primary"
              placeholder="Email"
              id="email"
            />
            <label htmlFor="password" className="mt-3 text-xl font-bold">Password</label>
            <input
              type="text"
              className="px-2 py-3 border-2 rounded-md border-primary"
              placeholder="Password"
              id="password"
            />
            <button className="py-3 mt-3 text-lg font-extrabold rounded-lg bg-tertiary">Login</button>
            <p className="mt-3 text-base font-light text-center text-primary">
              Belum Punya Akun?{" "}
              <Link href="/register" className="underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
