"use client";
import { ButtonHTMLAttributes, FC, ReactNode, use } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, ...props }: Props) => {
  return (
    <div className="justify-center">
      <button
        className="px-4 py-2 rounded bg-black text-white disabled:cursor-default disabled:opacity-5 hover:scale-105 "
        {...props}
        onClick={() => window.scroll({ top: 0 })}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

