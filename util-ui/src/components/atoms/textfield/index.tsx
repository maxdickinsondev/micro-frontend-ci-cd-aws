import { TextFieldProps } from "./types";

function TextField({ label, ...rest }: TextFieldProps) {
  return (
    <div className="flex w-full flex-col">
      {label && <label className="text-black text-base">{label}</label>}
      <input
        {...rest}
        className="w-full h-12.5 mt-2 bg-[#F5F5F5] text-[#7A7A7A] rounded px-4 py-3"
      />
    </div>
  );
}

export { TextField };
