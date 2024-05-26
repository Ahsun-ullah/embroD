/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import Footer from "../../../components/HomePage/Footer";
import Header from "../../../components/HomePage/Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col h-screen items-center justify-center gap-10 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md p-6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <CardHeader className="flex flex-col items-start">
            <h4 className="font-bold text-xl mb-3">Hello!</h4>
            <p className="text-sm uppercase font-bold">
              Please Fill The All Fields For Registration.
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <form onSubmit={"handleSubmit"}>
              <div className="mb-4">
                <label htmlFor="username" className="form-label">
                  User Name
                </label>
                <Input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  className="form-control mt-2"
                  placeholder="Enter Your FullName"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control mt-2"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="form-label" htmlFor="password-input">
                  Password
                </label>
                <div className="relative">
                  <Input
                    onChange={(e) => handleChange(e)}
                    type="password"
                    className="form-control password-input mt-2"
                    placeholder="Enter password"
                    aria-describedby="passwordInput"
                    required
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                    type="button"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <i></i>
                  </button>
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  value="Register"
                  className="button bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-md"
                />
              </div>
            </form>

            <div className="mt-5 text-center">
              <p className="mb-0">
                Already have an account?
                <Link
                  href="/auth/login"
                  className="font-semibold ms-1 text-blue-500 underline"
                >
                  SignIn
                </Link>
              </p>
            </div>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} EmbroiD. Crafted with{" "}
            <i className="mdi mdi-heart text-red-500"></i> by Ahsun
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
