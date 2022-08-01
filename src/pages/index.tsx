import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';

import { getAllPosts } from '../data/posts/get-all-posts';
import HomePage from '../containers/HomePage';

export type HomePropos = {
  posts: PostData[];
};

export default function Home({ posts }: HomePropos) {
  return (
    <div>
      <HomePage posts={posts} />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=30'
  );
  return {
    props: { posts },
    revalidate: 10,
  };
};
