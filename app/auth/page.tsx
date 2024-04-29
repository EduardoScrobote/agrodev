"use client";
import React from "react";
import Input from "@/components/Input";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  secondName: string;
};

function Auth() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center w-[720px] h-screen"
      >
        <h1 className="text-2xl font-bold">Registre-se</h1>
        <Input placeholder="Nome" register={register} name="name" />
        <Input placeholder="Sobre nome" register={register} name="secondName" />
        <button type="submit">Teste</button>
      </form>
    </div>
  );
}

export default Auth;
