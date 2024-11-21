import React from 'react'
import { FieldError, FieldErrorsImpl, FieldValues, Merge, Path, UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from 'tailwind-merge'

type TextInputProps<T extends FieldValues> = {
  id: string;
  placeholder: string;
  value?: string;
  type?: string;
  name: Path<T>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  register: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
}

export default function TextInput<T extends FieldValues>({ id, placeholder, value, onChange, className, register, type, name, errors }: TextInputProps<T>) {
  const defaultClassName = twMerge('w-full border border-gray-200 p-2 rounded focus:border-gray-500 focus:ring-gray-500', className);

  return (
    <div>
      <input
        id={id}
        type={type}
        {...register}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={defaultClassName}
        name={name}
      />
      {errors && typeof errors.message === 'string' && (
        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
      )}
    </div>
  )
}