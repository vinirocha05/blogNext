import { useRouter } from 'next/router';
import Error from 'next/error';

import { GetStaticPaths, GetStaticProps } from 'next';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';
import Post from '../../containers/Post';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  if (!post) {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <Post post={post} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(
    `&pagination[start]=0&pagination[limit]=${numberOfPosts}`
  );

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getPost(context.params.slug);
  return {
    props: { post: post[0] },
    revalidate: 10,
  };
};
