import { useCallback } from "react";
import { LinkProps } from "./types";
import { navigateToUrl } from "single-spa";

function Link({ path, title, onClick }: LinkProps) {
  const navigate = useCallback((path: string) => {
    navigateToUrl(path);
    onClick && onClick();
  }, []);

  return (
    <button
      className="hover:text-[#DB4444] text-lg cursor-pointer"
      onClick={() => navigate(path)}
    >
      {title}
    </button>
  );
}

export { Link };
