import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold shadow-sm bg-gradient-to-r from-white to-slate-100 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-100 focus:ring-offset-2 gap-1",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-violet-200 to-blue-200 text-white hover:from-violet-300 hover:to-blue-300",
        secondary:
          "bg-gradient-to-r from-gray-200 to-gray-300 text-white hover:from-gray-300 hover:to-gray-400",
        destructive:
          "bg-gradient-to-r from-red-200 to-orange-200 text-white hover:from-red-300 hover:to-orange-300",
        outline: "bg-transparent border border-gray-100 text-gray-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
