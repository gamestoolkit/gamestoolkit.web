'use server'

import { defaultFetch } from "@/common/apiUtils"
import { API_URL } from "@/common/constants"
import { PostWithoutContent, CreatePostCommand } from "@/models/postModels";
import { redirect } from "next/navigation";


const POSTS_URL = `${API_URL}/post`

export async function LoadPostsWithoutContent(): Promise<PostWithoutContent[]> {
  const res = await defaultFetch(POSTS_URL);
  const data: PostWithoutContent[] = await res.json();
  return data;
}


export async function CreatePosts(newPost: CreatePostCommand): Promise<void> {
  const res = await defaultFetch(POSTS_URL, "POST", JSON.stringify(newPost));
  const data: unknown = await res.json();
  console.log(data);
  //return data;
}

