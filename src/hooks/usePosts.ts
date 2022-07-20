import {useEffect, useState} from 'react';

import {getPosts} from '../api';
import {Post} from '../types';

export const usePosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const requestPosts = async () => {
      const posts = await getPosts();
      setData(posts);
      setIsLoading(false);
    };

    requestPosts();
  }, []);

  return {isLoading, data};
};
