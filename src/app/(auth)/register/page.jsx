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
            username: yup.string().required("Username tidak boleh kosong").min(3, "Username minimal 3 karakter").max(10, "Username maksimal 10 karakter"),
            email: yup.string().required("Email tidak boleh kosong").email("Harus format email"),
            password: yup.string().required("Password tidak boleh kosong").min(6, "Password minimal 6 karakter"),
            confirmedPassword: yup
                .string().required("Confirmed Password tidak boleh kosong")
                .oneOf([yup.ref("password"), null], "Passwords tidak valid"),
        })
    })


    // console.log("Error",formik.touched && formik.errors);
    // console.log('Touched', formik.touched);

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
                    <InputForm onChange={formik.handleChange} id={"username"} type={"text"} placeholder={"username"} name={"username"} value={formik.values.username} onBlur={formik.handleBlur} errors={formik.touched.username && formik.errors.username} />

                    <LabelForm For={"email"} text={"Email"} />
                    <InputForm onChange={formik.handleChange} id={"email"} type={"text"} placeholder={"Email"} name={"email"} value={formik.values.email} onBlur={formik.handleBlur} errors={formik.touched.email && formik.errors.email} />

                    <LabelForm For={"password"} text={"Password"} />
                    <InputForm onChange={formik.handleChange} id={'password'} type={'password'} placeholder={'Password'} name={'password'} value={formik.values.password} onBlur={formik.handleBlur} errors={formik.touched.password && formik.errors.password} />

                    <LabelForm For={"confirmpassword"} text={"Confirm Password"} />
                    <InputForm onChange={formik.handleChange} id={'confirmpassword'} type={'password'} placeholder={'Confirm Password'} name={'confirmedPassword'} value={formik.values.confirmedPassword} onBlur={formik.handleBlur} errors={formik.touched.confirmedPassword && formik.errors.confirmedPassword} />

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
