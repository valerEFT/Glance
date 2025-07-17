import { Logo } from "@/shared/ui/Logo";
import { Input } from "@/shared/ui/Input";
import { geistMono } from "@/shared/fonts";
import headerStyles from "@/widgets/Header/Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={headerStyles.header}>
      <Logo className={`${geistMono.variable} ${headerStyles.logo}`} />
      <Input
        type="text"
        placeholder="Поиск..."
        className={headerStyles.input}
      />
    </header>
  );
};
