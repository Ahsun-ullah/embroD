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

const Login = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-14">
      <Card className="w-1/4 p-4">
        <CardHeader className="flex flex-col items-start">
          <h4 className="font-bold text-lg mb-3">Welcome!</h4>
          <p className="text-sm uppercase font-bold">
            Sign in to continue to EmbroiD.
          </p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <form onSubmit={"handleSubmit"}>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">
                User Email
              </label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control mt-2"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-6">
              <div className="float-right">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => togOpenModal()}
                  className="text-muted text-primary font-semibold underline"
                >
                  Forgot password?
                </div>
              </div>
              <label className="form-label" htmlFor="password-input">
                Password
              </label>
              <div className="position-relative auth-pass-inputgroup">
                <Input
                  onChange={(e) => handleChange(e)}
                  className="form-control password-input mt-2"
                  placeholder="Enter password"
                  aria-describedby="passwordInput"
                  required
                />
                <button
                  className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
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
                value="Sign In"
                className="button text-light w-full py-16"
              />
            </div>
          </form>

          <div className="mt-5 text-center">
            <p className="mb-0">
              Don't have an account?
              <Link
                href="/auth/register"
                className="font-semibold ms-1 text-primary underline"
              >
                Signup
              </Link>
            </p>
          </div>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      <div className="">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} EmbroiD. Crafted with{" "}
          <i className="mdi mdi-heart text-danger"></i> by Ahsun
        </p>
      </div>
    </div>
  );
};

export default Login;
