import { BoxProps } from "./types";

function Box({ children }: BoxProps) {
  return (
    <div className="shadow w-full bg-white rounded px-8 py-10">{children}</div>
  );
}

export { Box };
