import { POSTS_URL } from '../../config/app-config';
import { Data } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POSTS_URL}${query}`;
  const posts = await fetchJson<Data>(url);
  return posts.meta.pagination.total;
};
