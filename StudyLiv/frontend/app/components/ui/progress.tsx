"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-[var(--richblack-700)] relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={`${
          (value as number === 100) ? 'bg-[var(--caribbeangreen-100)]' :
          (value as number >= 75) ? 'bg-[var(--blue-20)]' :
          (value as number >= 50) ? 'bg-[var(--yellow-25)]' :
          (value as number >= 25) ? 'bg-[var(--yellow-100)]' : (value as number === 0) ? '' : 'bg-[var(--destructive)]'} h-full w-full flex-1 transition-all`}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
