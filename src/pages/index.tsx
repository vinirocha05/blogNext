import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';

import { getAllPosts } from '../data/posts/get-all-posts';
import { useEffect } from 'react';
import HomePage from '../containers/HomePage';

export type HomePropos = {
  posts: PostData[];
};

export default function Home({ posts }: HomePropos) {
  console.log(posts);

  return (
    <div>
      <HomePage posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};
