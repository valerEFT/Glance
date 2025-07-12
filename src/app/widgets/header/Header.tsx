import { Input, Logo } from "@/shared/ui";
import { geistMono, geistSans } from "@/shared/fonts";

export const Header: React.FC = () => {
  return (
    <div>
      <Logo
        className={`${geistMono.variable} text-[var(--color-violet)] text-[28px]`}
      />
      <Input
        type="text"
        placeholder="Поиск..."
        className={"bg-var(--color-gray)"}
      />
    </div>
  );
};
