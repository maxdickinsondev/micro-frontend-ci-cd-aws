import { HTMLAttributes } from "react";

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}
