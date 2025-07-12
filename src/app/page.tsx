import { Button } from "@/shared/ui/Button";

export default function Home() {
  return (
    <div className="max-w-[267px] w-full flex items-center justify-center">
      <Button className="w-full py-3 text-center bg-[var(--color-blue)] text-[var(--color-white)]">
        Оформить заказ
      </Button>
    </div>
  );
}
