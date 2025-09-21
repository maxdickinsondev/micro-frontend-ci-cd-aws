import { BadgeProps } from "./types";

function Badge({ amount }: BadgeProps) {
  return (
    <span className="flex items-center justify-center text-xs text-white absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#DB4444]">
      {amount}
    </span>
  );
}

export { Badge };
