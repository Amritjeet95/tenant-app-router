'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import {Input, InputFormValues} from '@/app/components/input/input';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputFormValues>()
  

  console.log(watch("Email")) // watch input value by passing the name of it

  const handleFormSubmit: SubmitHandler<InputFormValues> = (formData) => {
    console.log(formData);
  }

  return (
      <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input label="Email" type='text' register={register} required />
          <Input label="User name" type='text' register={register} required />
          <Input label="Password" type='password' register={register} required />
          <input type="submit" />
      </form>
  );
}