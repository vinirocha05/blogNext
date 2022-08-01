import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL } from '../../config/app-config';
import { Container } from './styles';

export type CommentsProps = {
  slug: string;
  title: string;
};

export default function Comments({ slug, title }: CommentsProps) {
  return (
    <Container>
      <DiscussionEmbed
        shortname="blogstrapi"
        config={{
          url: `${SITE_URL}/post/slug/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt-BR',
        }}
      />
    </Container>
  );
}
