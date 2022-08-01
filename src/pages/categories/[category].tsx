import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/post';

export type CategoryPropos = {
  posts: PostData[];
  category?: string;
};

export default function Category({ posts, category }: CategoryPropos) {
  return (
    <div>
      <HomePage posts={posts} category={category} />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `&sort=id:desc&pagination[start]=0&pagination[limit]=30&filters[category][name][$containsi]=${ctx.query.category}`;
  const posts = await getAllPosts(urlQuery);
  return {
    props: { posts, category: ctx.query.category },
  };
};
