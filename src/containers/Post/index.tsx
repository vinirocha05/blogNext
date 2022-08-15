import Head from 'next/head';
import Comments from '../../components/Comments';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import PostContainer from '../../components/PostContainer';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';
import { SITE_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { removeHtml } from '../../utils/remove-html';
import { Container } from './styles';

export type PostProps = {
  post: PostData;
};

export default function HomePage({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>
          {post.attributes.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(
            post.attributes.content
          ).slice(0, 150)}
        />
      </Head>
      <Header />
      <Container>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={
            post.attributes.cover.data.attributes.formats
              .large.url
          }
          alt={post.attributes.title}
        />
        <PostDetails
          date={post.attributes.createdAt}
          author={
            post.attributes.author.data.attributes.name
          }
          category={
            post.attributes.category.data.attributes.name
          }
        />
        <PostContainer content={post.attributes.content} />
      </Container>
      <Comments
        slug={post.attributes.slug}
        title={post.attributes.title}
      />
      <Footer />
    </>
  );
}
