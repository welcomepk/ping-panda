import { cn } from "@/utils"
import { ReactNode } from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
interface MaxWidthWrapperProps {
  className?: string
  children: ReactNode
}

export const MaxWidthWrapper = ({
  className,
  children,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  )
}
