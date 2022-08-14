import Link from 'next/link';
import { PaginationData } from '../../domain/posts/pagination';
import { Container, NextLink, PreviousLink } from './syles';

export type PaginationProps = PaginationData;

export default function Pagination({
  nextPage,
  previousPage,
  numberOfPosts,
  category,
  postsPerPage,
}: PaginationProps) {
  const categoryName = category || '';
  const nextLink = `/post/pages/${nextPage}/${categoryName}`;
  const previousLink = `/post/pages/${previousPage}/${categoryName}`;
  const hasNextPage =
    nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;

  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href="/[...params]">
            <a> Previous</a>
          </Link>
        </PreviousLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/[...params]">
            <a> Next Page</a>
          </Link>
        </NextLink>
      )}
    </Container>
  );
}
