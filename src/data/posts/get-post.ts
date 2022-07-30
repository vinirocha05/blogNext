import { POSTS_URL } from '../../config/app-config';
import { Data, PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;
  console.log(url);

  const post = await fetchJson<Data>(url);
  return post.data;
};
