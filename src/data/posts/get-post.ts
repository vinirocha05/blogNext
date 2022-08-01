import { POSTS_URL } from '../../config/app-config';
import { Data, PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { MarkdownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;
  const post = await fetchJson<Data>(url);

  if (!post.data.length) return post.data;

  const content = await MarkdownToHtml(post.data[0].attributes.content);
  post.data[0].attributes.content = content;
  return post.data;
};
