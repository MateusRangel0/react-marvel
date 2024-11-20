import React from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ type, onClick, className, children, disabled }: ButtonProps) {
  const defaultClassName =
    twMerge(`font-semibold p-2 rounded  ${disabled ? "text-gray-400 bg-gray-500" : "text-white hover:bg-red-700 bg-red-800"}`, className)

  return (
    <button type={type} onClick={onClick} className={defaultClassName} disabled={disabled}>
      {children}
    </button>
  )
}