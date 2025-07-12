import { Input } from "@/shared/ui";
import { cn } from "@/shared/utils";

export const Header = () => {
  return <Input type="text" placeholder="Поиск..." className={cn("")} />;
};
