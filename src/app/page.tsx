import { Container } from "@/shared/ui/Container";
import { Header } from "@/widgets/header";

export default function Home() {
  return (
    <Container className="flex justify-center items-center text-center mx-20 w-[1440px]">
      <Header />
    </Container>
  );
}
