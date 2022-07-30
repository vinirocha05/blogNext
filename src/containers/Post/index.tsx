import Comments from '../../Comments';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import MainContainer from '../../components/MainContainer';
import PostContainer from '../../components/PostContainer';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

export type PostProps = {
  post: PostData;
};

export default function HomePage({ post }: PostProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          <Heading>{post.attributes.title}</Heading>
          <PostCover
            coverUrl={post.attributes.cover.data.attributes.formats.large.url}
            alt={post.attributes.title}
          />
          <PostDetails
            date={post.attributes.createdAt}
            author={post.attributes.author.data.attributes.name}
            category={post.attributes.category.data.attributes.name}
          />
          <PostContainer content={post.attributes.content} />
        </Container>
      </MainContainer>
      <Comments slug={post.attributes.slug} title={post.attributes.title} />
      <Footer />
    </>
  );
}
