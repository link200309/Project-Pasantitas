"use client";
import { Input, Label } from "@/shared/components/ui";
import { type LucideIcon, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

interface InputFormProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "email" | "password" | "date" | "number";
  Icon?: LucideIcon;
  className?: string;
  additionalClassName?: string;
  name?: string;
}

export default function InputForm({
  label,
  placeholder,
  required = false,
  type = "text",
  Icon,
  className,
  additionalClassName,
  name,
}: InputFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={`${additionalClassName} space-y-3`}>
      <Label>{label}</Label>
      <div className="relative flex items-center">
        {Icon && <Icon size={20} className="absolute left-3 " />}
        <Input
          placeholder={placeholder}
          required={required}
          type={inputType}
          className={`${className} ${Icon ? "pl-10" : ""}`}
          name={name}
        />

        {type === "password" && (
          <button
            className="absolute right-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}
