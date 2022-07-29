import { POSTS_URL } from '../../config/app-config';
import { Data, PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fetchJson<Data>(POSTS_URL);
  return posts.data;
};
