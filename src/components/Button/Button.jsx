import React from "react";

const buttonVariants = {
  default: "bg-black text-white shadow-sm hover:bg-blue-500",
  primaryActive: "bg-primary text-white shadow",
  primaryInactive: "bg-primary text-white shadow",
  destructive: "bg-secondary text-primary shadow-sm hover:bg-red-500",
  outline: "border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100",
  secondary: "bg-gray-600 text-white shadow-sm hover:bg-gray-500",
  ghost: "hover:bg-gray-100 text-gray-700",
  link: "text-blue-600 underline-offset-4 hover:underline",
};

const sizeVariants = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "h-9 w-9 flex items-center justify-center",
};

const Button = ({ variant = "default", size = "default", className = "", asChild, children, ...props }) => {
  const Comp = asChild ? "span" : "button"; // Permite envolver en otro elemento si se necesita
  return (
    <Comp
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 ${buttonVariants[variant]} ${sizeVariants[size]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;
