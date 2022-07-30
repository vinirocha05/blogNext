import { POSTS_URL } from '../../config/app-config';
import { Data } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (): Promise<string> => {
  const posts = await fetchJson<Data>(POSTS_URL);
  return posts.meta.pagination.total;
};
