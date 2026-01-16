// components/ui/button.jsx
import React, { forwardRef } from "react"
import clsx from "clsx"

const Button = forwardRef(function Button(
  {
    className,
    variant = "primary",
    size = "md",
    type = "button",
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        // base styles
        "inline-flex pl-5 gap-2 items-center justify-center font-medium transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",

        // variants
        {
          "bg-green-500 text-black hover:bg-green-400 focus:ring-green-500":
            variant === "primary",

          "bg-white text-black hover:bg-white/90 focus:ring-white":
            variant === "secondary",

          "bg-transparent text-white hover:bg-white/10 focus:ring-white":
            variant === "ghost",

            "bg-black text-white hover:bg-black focus:ring-black":
            variant === "shadow",
        },

        // sizes (8px system)
        {
          "h-9 px-4 text-sm rounded-full": size === "sm",
          "h-11 px-1 text-sm rounded-full": size === "md",
          "h-12 px-8 text-base rounded-full": size === "lg",
          "h-11 w-11 text-base rounded-full": size === "icon",
        },

        className
      )}
      {...props}
    />
  )
})

Button.displayName = "Button"

export default Button
