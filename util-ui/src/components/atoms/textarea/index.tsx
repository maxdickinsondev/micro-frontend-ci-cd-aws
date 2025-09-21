import { TextareaProps } from "./types";

function Textarea({ label, ...rest }: TextareaProps) {
  return (
    <div className="flex flex-col">
      {label && <label className="text-black text-base">{label}</label>}
      <textarea
        {...rest}
        className="w-full h-48 mt-2 bg-[#F5F5F5] text-[#7A7A7A] rounded px-4 py-3"
      />
    </div>
  );
}

export { Textarea };
