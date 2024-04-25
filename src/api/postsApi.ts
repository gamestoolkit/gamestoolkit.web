import { defaultFetch } from "@/common/apiUtils"
import { API_URL } from "@/common/constants"


const POSTS_URL = `${API_URL}/post`

export async function LoadPostsWithoutContent(): Promise<PostWithoutContent[]> {
  const res = await defaultFetch(POSTS_URL);
  const data: PostWithoutContent[] = await res.json();
  return data;
}
