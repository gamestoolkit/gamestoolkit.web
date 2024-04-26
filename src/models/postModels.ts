export type PostWithoutContent = {
  id: number;
  title: string;
  description: string | undefined;
  author: string;
  postImage: string | undefined;
}

export type PostWithContent = {
  id: number;
  title: string;
  description: string | undefined;
  author: string;
  postImage: string | undefined;
  contentHtml: string;
}

export type CreatePostCommand = {
  title: string;
  description: string | undefined;
  author: string;
  postImage: string | undefined;
  contentHtml: string;
}

export type CreatePostCommandKey = keyof CreatePostCommand;

export const defaultCreatePostCommand: CreatePostCommand = {
  title: "default title",
  description: "default description",
  author: "default author",
  postImage: "default image",
  contentHtml: "default content"
}

