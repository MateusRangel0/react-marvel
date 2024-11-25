import { twMerge } from 'tailwind-merge'

type TitleProps = {
  className?: string;
  children: React.ReactNode;
}


export default function Title({ className, children }: TitleProps) {
  const defaultClassName = twMerge('text-2xl font-bold mb-2', className)

  return (
    <h1 className={defaultClassName}>{children}</h1>
  )
}
