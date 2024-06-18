import {Button as ShadcnButton} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ReactNode} from "react";
import DiagonalLine from "../diagonal-line";

export interface WitroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
  children: string | number | ReactNode;
  className?: string;
  fullWidth?: boolean;
}
function ButtonSelect({
  variant = "primary",
  size = "default",
  children,
  className,
  fullWidth,
  ...props
}: WitroButtonProps) {
  const baseClass =
    "h-11 rounded-md text-xs font-medium py-[14px] items-center flex gap-1";
  const customVariant = {
    primary: cn(baseClass, "bg-black text-white"),
    outlined: cn(baseClass, "bg-transparent border border-black"),
    disabled: cn(baseClass, "bg-white text-[#A3A19C] border border-[#D1D0CE]"),
  };

  const customSize = {
    default: "h-11 px-4 py-[14px]",
    small: "h-8 px-2",
    large: "h-12 px-6",
    fullWidth: "w-full",
  };

  const selectButton = {
    regularSelectButton: (
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
    ),
    disabledSelectButton: (
      <div className={cn("relative", size || "h-11")}>
        <DiagonalLine />
        <ShadcnButton
          variant={customVariant}
          size={customSize}
          variantType={variant}
          sizeType={fullWidth ? "fullWidth" : size}
          className={cn(className, "z-0 relative")}
          {...props}
        >
          {children}
        </ShadcnButton>
      </div>
    ),
  };
  return selectButton[
    variant === "disabled" ? "disabledSelectButton" : "regularSelectButton"
  ];
}

export default ButtonSelect;
