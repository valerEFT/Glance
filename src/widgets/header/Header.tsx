import { Input, Logo } from "@/shared/ui";
import { geistMono } from "@/shared/fonts";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between w-full">
      <Logo
        className={`${geistMono.variable} text-[var(--color-violet)] text-[28px]`}
      />
      <Input
        type="text"
        placeholder="Поиск..."
        className={"bg-var(--color-gray)"}
      />
    </header>
  );
};
