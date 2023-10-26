import Link from "next/link";
import React from "react";

import Button, { SpinnerMini } from "@/components/Button";
import FormTextField from "@/components/formComponents/FormTextField";
import PasswordTextField from "@/components/formComponents/PasswordTextField";
import Image from "next/image";

import { useForm, FormProvider } from "react-hook-form";
import { LoginFormProps } from "@/interfaces/App.interface";
import useAuthentication from "@/hooks/useAuthentication";
import useAuthQuery from "@/hooks/useAuthQuery";

function Index() {
  const formMethods = useForm();
  const { login, isLoading } = useAuthQuery();

  function onSubmit() {
    login(formMethods.getValues() as LoginFormProps, {
      onSettled: () => {
        formMethods.reset();
      },
    });
  }
  return (
    <div className="my-20 grid  grid-cols-12 gap-6 px-20">
      <div className="col-span-8 ">
        <Image
          src="/Burger.jpeg"
          alt="burger image"
          width={300}
          height={300}
          className=" h-[500px] w-full rounded-3xl object-cover"
        />
      </div>
      {/* form part */}

      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="col-span-4  "
        >
          <h1 className=" mb-4 text-center text-3xl font-semibold text-primary">
            Foodlify Admin
          </h1>

          <FormTextField
            name="username"
            defaultValue="admin@foodlify.com"
            label="Email"
            icontype="email"
            rules={{ required: "Email required" }}
          />

          <PasswordTextField
            name="password"
            label="Username"
            defaultValue="password"
            type="password"
            rules={{ required: "Username required" }}
          />
          <div className="mb-2 mt-12 text-primary">
            <Link href="/">Forget Password? </Link>
          </div>

          <Button
            type="primary"
            disabled={isLoading}
            loading={isLoading}
            className="w-full bg-primary py-4 text-white "
          >
            Login
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default Index;
