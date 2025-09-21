import { TagProps } from "./types";

function Tag({ label }: TagProps) {
  return (
    <div className="flex flex-row items-center space-x-4">
      <div className="h-10 w-5 rounded-sm bg-[#DB4444]" />
      <span className="text-[#DB4444] font-medium">{label}</span>
    </div>
  );
}

export { Tag };
