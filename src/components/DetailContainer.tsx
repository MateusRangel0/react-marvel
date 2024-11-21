import React from 'react'

type DetailContainerProps = {
  imageUrl: string;
  children: React.ReactNode;
  name: string;
}

export default function DetailContainer({ imageUrl, children, name }: DetailContainerProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-lg md:flex-row md:items-start">
      <img src={imageUrl} alt={name} className="mb-4 size-48 rounded-md object-cover md:mb-0 md:mr-8" />
      <div className="flex flex-col space-y-4 w-full">
        {children}
      </div>
    </div>
  )
}