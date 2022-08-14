import Link from 'next/link';
import { Container } from './syles';

export default function Header() {
  return (
    <Container>
      <Link href="/">
        <a>Meu Blog </a>
      </Link>
    </Container>
  );
}
