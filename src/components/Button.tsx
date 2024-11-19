import React from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function Button({ type, onClick, className, children }: ButtonProps) {
  const defaultClassName = twMerge('w-full bg-red-800 text-white p-2 rounded', className)

  return (
    <button type={type} onClick={onClick} className={defaultClassName}>
      {children}
    </button>
  )
}