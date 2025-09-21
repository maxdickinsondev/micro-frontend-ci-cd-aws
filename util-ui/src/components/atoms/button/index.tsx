import { ButtonProps } from "./types";

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-12 text-white rounded-sm py-4 bg-[#DB4444]"
    >
      {children}
    </button>
  );
}

export { Button };
