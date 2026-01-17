import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"
import { motion, type HTMLMotionProps } from "framer-motion"

// Define variants and sizes as constants for reuse and export
export const buttonVariantsMap = {
  variant: {
    primary: "bg-[#7B61FF] text-white hover:bg-[#6A51E0] border border-transparent shadow-sm",
    secondary: "bg-[#1A1A1A] text-white hover:bg-black border border-transparent shadow-sm",
    outline: "bg-transparent text-[#1A1A1A] border border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/5",
    ghost: "bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A]/5",
    default: "bg-[#7B61FF] text-white hover:bg-[#6A51E0] border border-transparent shadow-sm", // Alias for primary
    destructive: "bg-red-500 text-white hover:bg-red-600", // Common Shadcn variant
    link: "text-primary underline-offset-4 hover:underline",
  },
  size: {
    default: "px-6 py-3 text-base h-12", // Map default to md-ish
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base h-12",
    lg: "px-8 py-4 text-lg h-14",
    icon: "p-2 w-10 h-10 flex items-center justify-center",
    "icon-sm": "p-1 w-8 h-8 flex items-center justify-center", // Added for compatibility
    "icon-xs": "p-0.5 w-6 h-6 flex items-center justify-center", // Added for compatibility
  }
}

// Helper to mimic cva's behavior for existing consumers
export function buttonVariants({ variant = "default", size = "default", className = "" }: { variant?: keyof typeof buttonVariantsMap.variant, size?: keyof typeof buttonVariantsMap.size, className?: string } = {}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#7B61FF]/30 disabled:pointer-events-none disabled:opacity-50",
    buttonVariantsMap.variant[variant] || buttonVariantsMap.variant.default,
    buttonVariantsMap.size[size] || buttonVariantsMap.size.default,
    className
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariantsMap.variant
  size?: keyof typeof buttonVariantsMap.size
  asChild?: boolean
}

// Combine HTMLButtonElement props with MotionProps
type CombinedButtonProps = ButtonProps & HTMLMotionProps<"button">

const Button = React.forwardRef<HTMLButtonElement, CombinedButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {

    // Normalize variant/size if passed as "default" (common in Shadcn) to match our map keys
    const finalVariant = variant || 'default'
    const finalSize = size || 'default'

    const Comp = asChild ? Slot : motion.button
    const motionProps = asChild ? {} : {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 }
    }

    return (
      <Comp
        ref={ref}
        {...motionProps}
        className={cn(
          buttonVariants({ variant: finalVariant, size: finalSize, className })
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
