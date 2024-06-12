import {Button as ShadcnButton} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ReactNode} from "react";

export interface WitroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
  children: string | number | ReactNode;
  className?: string;
  fullWidth?: boolean;
}
export function Button({
  variant,
  size,
  children,
  className,
  fullWidth,
  ...props
}: WitroButtonProps) {
  const baseClass =
    "h-11 rounded-md text-xs font-medium py-[14px] items-center flex gap-1";
  const customVariant = {
    default: "bg-custom text-custom-foreground",
    primary: cn(baseClass, "bg-[#0199FE] text-white"),
    tonal: cn(baseClass, "bg-[#EDECEB] text-black"),
    outlined: cn(baseClass, "bg-transparent border border-[#0199FE]"),
    disabled: cn(baseClass, "bg-[#0199FE] text-white opacity-30"),
    link: cn(baseClass, "bg-transparent underline text-[#0199FE]"),
  };

  const customSize = {
    default: "h-11 px-4 py-[14px]",
    small: "h-8 px-2",
    large: "h-12 px-6",
    fullWidth: "w-full",
  };

  return (
    <ShadcnButton
      variant={customVariant}
      size={customSize}
      variantType={variant}
      sizeType={fullWidth ? "fullWidth" : size}
      className={className}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
}

