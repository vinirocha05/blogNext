import { POSTS_URL } from '../../config/app-config';
import { Data, PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (): Promise<Data> => {
  const posts = await fetchJson<PostData[]>(POSTS_URL);
  return posts.data;
};
