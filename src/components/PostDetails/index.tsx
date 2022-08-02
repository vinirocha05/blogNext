import Link from 'next/link';
import Date from '../Date';
import { Container } from './syles';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export default function PostDetails({
  date,
  author,
  category,
}: PostDetailsProps) {
  return (
    <Container>
      Publicado por {author} em <Date date={date} /> |{' '}
      <Link
        as={`/post/pages/1/${category.toLocaleLowerCase()}`}
        href="/[...params]"
      >
        <a>{category}</a>
      </Link>
    </Container>
  );
}
