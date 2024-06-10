import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cva} from "class-variance-authority";

import {cn} from "@/lib/utils";

const buttonVariants = (
  variant: Record<string, string | number>,
  size: Record<string, string | number>
) =>
  cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant,
        size,
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Record<string, string | number>;
  size?: Record<string, string | number>;
  variantType?: string;
  sizeType?: string;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      variantType = "default",
      sizeType = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const variantsClass =
      variant && size ? buttonVariants(variant, size) : () => "";
    return (
      <Comp
        className={cn(
          variantsClass({variant: variantType, size: sizeType}),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export {Button};
