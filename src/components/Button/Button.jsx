import React from "react";

const buttonVariants = {
  default: "bg-red-500 text-white shadow-sm hover:bg-blue-500",
  primaryActive: "bg-green-500 text-white shadow hover:bg-blue-500",
  primaryInactive: "bg-yellow-500 text-white shadow hover:bg-blue-500",
  destructive: "bg-blue-500 text-primary shadow-sm hover:bg-red-500",
  outline: "border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100",
  secondary: "bg-gray-600 text-white shadow-sm hover:bg-gray-500",
  ghost: "hover:bg-gray-100 text-gray-700",
  link: "text-blue-600 underline-offset-4 hover:underline",
};

const Button = ({ variant = "default", size = "default", className = "", children, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 "h-9 px-4 py-2 ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
