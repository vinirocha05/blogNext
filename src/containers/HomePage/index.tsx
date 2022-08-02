import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import Pagination from '../../components/Pagination';
import PostCard from '../../components/PostCard';
import { SITE_NAME } from '../../config/app-config';
import { PaginationData } from '../../domain/posts/pagination';
import { PostData } from '../../domain/posts/post';
import { Container, Category, AllPostsLinks } from './styles';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>
          {category ? `${category} - ${SITE_NAME}` : SITE_NAME}{' '}
          {pagination?.nextPage && `- Página ${pagination.nextPage - 1}`}
        </title>
        <meta name="description" content="este é meu blog de tecnologia" />
      </Head>
      <Header />
      {category && <Category> Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.attributes.slug}
              title={post.attributes.title}
              slug={post.attributes.slug}
              cover={post.attributes.cover.data.attributes.formats.small.url}
            />
          ))}
        </Container>
        <Pagination {...pagination} />
        {!pagination?.nextPage && (
          <Link passHref href="/[...params]" as="post/pages/1">
            <AllPostsLinks>Ver todos os posts</AllPostsLinks>
          </Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
}
