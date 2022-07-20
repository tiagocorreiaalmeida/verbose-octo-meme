interface Image {
  source: {url: string};
}

interface Preview {
  images: Image[];
}

export interface Post {
  id: string;
  title: string;
  author_fullname: string;
  score: number;
  ups: number;
  downs: number;
  created: number;
  url_overridden_by_dest?: string;
  selftext: string;
  preview?: Preview;
}
