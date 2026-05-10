import * as React from "react"
import { cn } from "@/lib/utils"

export const buttonVariants = (variant: string, size: string) => {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
    {
      "bg-primary text-secondary shadow hover:bg-primary/90": variant === "default",
      "bg-accent text-secondary shadow-sm hover:bg-accent/90": variant === "accent",
      "border border-primary/20 bg-transparent text-primary shadow-sm hover:bg-secondary": variant === "outline",
      "hover:bg-secondary/50 text-primary": variant === "ghost",
      "text-primary underline-offset-4 hover:underline": variant === "link",
      "h-10 px-5 py-2": size === "default",
      "h-9 rounded-sm px-4 text-xs": size === "sm",
      "h-12 rounded-md px-8 py-3 text-base": size === "lg",
      "h-10 w-10": size === "icon",
    }
  )
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "accent";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants(variant, size), className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
