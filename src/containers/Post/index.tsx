import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import MainContainer from '../../components/MainContainer';
import PostCover from '../../components/PostCover';
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
          <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
