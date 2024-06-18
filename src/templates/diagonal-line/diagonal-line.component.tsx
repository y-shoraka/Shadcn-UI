import type {ReactElement} from "react";

import {cn} from "@/lib/utils";

export default function DiagonalLine({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <div
      className={cn(
        `absolute bottom-[0px] left-[0px] z-10 h-full w-full transform rounded-sm !bg-diagonal `,
        className
      )}
    ></div>
  );
}
