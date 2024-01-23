"use client";
import InputForm from "@/components/fragments/InputForm";
import LabelForm from "@/components/fragments/LabelForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useFormik } from "formik"
import * as yup from "yup";

const RegisterPage = () => {

   const registerUser = () => {
      console.log(formik.values.username);
      console.log(formik.values.email);
      console.log(formik.values.password);
      // console.log(formik.values.username);
   }

   const formik = useFormik({
      initialValues: {
         username: "",
         email: "",
         password: "",
         confirmedPassword: "",
      },
      onSubmit: registerUser,
      validationSchema: yup.object().shape({
         username: yup.string().required("Username harus diisi").min(3, "Username tidak boleh kurang dari 3 karakter").max(10, "Username tidak boleh lebih dari 10 karakter"),
         email: yup.string().required("Email harus diisi").email("Harus format email"),
         password: yup.string().required("Password harus diisi").min(6, "Password minimal 6 karakter"),
         confirmedPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords harus sama"),
      })
   })

   const handleForm = (event) => {
      const { target } = event
      formik.setFieldValue(target.name, target.value)
   }


   return (
      <div className="grid content-center h-screen max-w-screen-lg grid-cols-1 mx-auto md:grid-cols-2 justify-items-end gap-x-7 md:px-3 lg:px-5">
         <div className="items-center justify-start hidden md:flex mt-9">
            <Image
               src="/images/auth.png"
               alt="auth-image"
               width={500}
               height={500}
               className=""
            />
         </div>

         <div className="w-full px-2 md:px-0 md:justify-self-start justify-items-center">
            <p className="mb-6 text-4xl font-bold text-center text-primary">
               Register
            </p>
            <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center max-w-sm py-5 mx-auto border-4 rounded-lg size-auto border-primary px-7 md:max-w-xl">
               <LabelForm For={"username"} text={"Username"} />
               <InputForm onChange={handleForm} id={"username"} type={"text"} placeholder={"username"} name={"username"} errors={formik.errors.username} />

               <LabelForm For={"email"} text={"Email"} />
               <InputForm onChange={handleForm} id={"email"} type={"text"} placeholder={"Email"} name={"email"} errors={formik.errors.email} />

               <LabelForm For={"password"} text={"Password"} />
               <InputForm onChange={handleForm} id={'password'} type={'password'} placeholder={'Password'} name={'password'} errors={formik.errors.password} />

               <LabelForm For={"confirmpassword"} text={"Confirm Password"} />
               <InputForm onChange={handleForm} id={'confirmpassword'} type={'password'} placeholder={'Confirm Password'} name={'confirmedPassword'} errors={formik.errors.confirmedPassword} />

               <button type="submit" className="p-2 mt-3 text-base font-bold rounded-lg cursor-pointer md:font-extrabold md:text-lg md:py-3 bg-tertiary">
                  Register
               </button>

               <p className="mt-5 text-sm font-light text-center md:text-base text-primary">
                  Sudah Punya Akun?{" "}
                  <Link href="/login" className="underline">
                     Login
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default RegisterPage;
