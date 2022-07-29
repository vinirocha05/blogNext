import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
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
      </MainContainer>
    </>
  );
}
