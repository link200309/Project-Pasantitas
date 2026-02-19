import { Input, Label } from "@/shared/components/ui";

interface InputFormProps {
  label: string;
  placeholder: string;
  required?: boolean;
}

export default function InputForm({
  label,
  placeholder,
  required = false,
}: InputFormProps) {
  return (
    <div className="space-y-3">
      <Label>{label}</Label>
      <Input placeholder={placeholder} required={required} />
    </div>
  );
}
