"use client";
import InputForm from "@/components/fragments/InputForm";
import LabelForm from "@/components/fragments/LabelForm";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
   return (
      <>
         <div className="grid content-center h-screen max-w-screen-lg grid-cols-1 mx-auto md:grid-cols-2 justify-items-end gap-x-7 md:px-3 lg:px-5">
            <div className="items-center justify-end hidden md:flex mt-9">
               <Image
                  src="/images/auth.png"
                  alt="auth-image"
                  width={500}
                  height={500}
                  className=""
               />
            </div>

            <div className="w-full px-2 justify-self-start ">
               <p className="mb-6 text-4xl font-bold text-center text-primary">
                  Login
               </p>
               <form className="flex flex-col justify-center max-w-sm pt-6 pb-10 mx-auto border-4 rounded-lg size-auto border-primary px-7 md:max-w-xl">
                  <LabelForm For={"email"} name={"Email"} />
                     <InputForm
                        id={"email"}
                        type={"email"}
                        placeholder={"Email"}
                        name={"email"}
                     />

                  <LabelForm For={"password"} name={"Password"} />
                     <InputForm
                        id={"password"}
                        type={"password"}
                        placeholder={"Password"}
                        name={"password"}
                     />
                  
                  <button type="submit" className="p-2 mt-3 text-base font-bold rounded-lg cursor-pointer md:font-extrabold md:text-lg md:py-3 bg-tertiary">
                     Login
                  </button>
                  <p className="mt-5 text-sm font-light text-center md:text-base text-primary">
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
