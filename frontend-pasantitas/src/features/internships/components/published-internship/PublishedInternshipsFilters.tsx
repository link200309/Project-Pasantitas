import {
  Card,
  CardContent,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components";
import { Search } from "lucide-react";

interface Props {}

const items = [
  { label: "Todos", value: "all" },
  { label: "Activas", value: "active" },
  { label: "Cerradas", value: "closed" },
];

export function PublishedInternshipsFilters({}: Props) {
  return (
    <Card>
      <CardContent className="flex gap-3">
        <div className="relative w-full">
          <Search
            className="absolute top-[25%] left-3 text-muted-foreground"
            size={17}
          />
          <Input
            placeholder="Buscar por titulo, area, tecnologia o requisitos"
            className="pl-10"
          />
        </div>

        <Select defaultValue="all">
          <SelectTrigger className="w-full max-w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
