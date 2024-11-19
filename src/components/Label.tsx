import React from 'react'
import { twMerge } from "tailwind-merge"

type LabelProps = {
  htmlFor: string
  children: React.ReactNode
  className?: string
}

export default function Label({ children, htmlFor, className }: LabelProps) {
  const defaultClassName = twMerge('block text-sm font-semibold leading-6 text-gray-700', className)

  return (
    <label htmlFor={htmlFor} className={defaultClassName}>
      {children}
    </label>
  )
}
