import { Container } from "@/shared/ui/Container";
import { Header } from "@/widgets/Header";
import containerStyles from "@/shared/ui/Container/Container.module.scss";

export default function Home() {
  return (
    <Container className={containerStyles.container}>
      <Header />
    </Container>
  );
}
