import axios from 'axios';
import {Post} from './types';

interface GetPostsChildren {
  data: Post;
}

type GetPostsResponse = {
  data: {
    children: GetPostsChildren[];
  };
};

const getPostsFromChildren = (children: GetPostsChildren[]) => {
  return children.map(c => c.data);
};

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get<GetPostsResponse>(
    'https://api.reddit.com/r/reactnative/new.json',
  );

  return getPostsFromChildren(response.data.data.children);
};
