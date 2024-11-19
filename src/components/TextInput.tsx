import React from 'react'
import { twMerge } from 'tailwind-merge'

type TextInputProps = {
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function TextInput({ id, placeholder, value, onChange, className }: TextInputProps) {
  const defaultClassName = twMerge('w-full p-2 border border-gray-200 rounded', className)

  return (
    <input
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={defaultClassName}
    />
  )
}