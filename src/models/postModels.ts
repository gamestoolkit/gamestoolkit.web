type PostWithoutContent = {
  id: number;
  title: string;
  description: string | undefined;
  author: string;
  postImage: string | undefined;
}

type PostWithContent = {
  id: number;
  title: string;
  description: string | undefined;
  author: string;
  postImage: string | undefined;
  contentHtml: string;
}
