import { POSTS_URL } from '../../config/app-config';
import { Data, PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (
  query = ''
): Promise<PostData[]> => {
  const url = `${POSTS_URL}&${query}`;
  const posts = await fetchJson<Data>(url);
  return posts.data;
};
