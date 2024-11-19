import React from 'react'

type FormContainerProps = {
  children: React.ReactNode
}

export default function FormContainer({ children }: FormContainerProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded bg-white p-8 shadow-md">
        {children}
      </div>
    </div>
  )
}