import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../../domain/posts/post';

import { getAllPosts } from '../../../data/posts/get-all-posts';
import HomePage from '../../../containers/HomePage';
import { useRouter } from 'next/router';
import { PaginationData } from '../../../domain/posts/pagination';
import { countAllPosts } from '../../../data/posts/count-all-posts';

export type PagePropos = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({
  posts,
  category,
  pagination,
}: PagePropos) {
  const router = useRouter();
  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length)
    return <div>Página não encontrada]...</div>;
  return (
    <HomePage
      posts={posts}
      category={category}
      pagination={pagination}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps: GetStaticProps = async (
  ctx
) => {
  const page = Number(ctx.params.params[0]);
  const category = ctx.params.params[1] || '';

  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage;

  const categoryQuery = category
    ? `&filters[category][name][$containsi]=${category}`
    : '';

  const nextPage = page + 1;
  const previousPage = page - 1;

  const numberOfPosts = Number(
    await countAllPosts(categoryQuery)
  );

  const queryUrl = `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}&${categoryQuery}`;
  const posts = await getAllPosts(queryUrl);

  const pagination = {
    nextPage,
    previousPage,
    numberOfPosts,
    category,
    postsPerPage,
  };
  return {
    props: { posts, pagination, category },
    revalidate: 600,
  };
};
