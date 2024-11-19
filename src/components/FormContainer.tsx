import React from 'react'

type FormContainerProps = {
  children: React.ReactNode
}

export default function FormContainer({ children }: FormContainerProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  )
}
