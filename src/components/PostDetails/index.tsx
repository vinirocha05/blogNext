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
      Publicado por {author} em <Date date={date} /> | {category}
    </Container>
  );
}
