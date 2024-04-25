import { REVALIDATE_CACHE_SECS } from "./constants";

export async function defaultFetch(url: string) : Promise<Response> {
  const res = await fetch(
    url,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      next: {
        revalidate: REVALIDATE_CACHE_SECS
      }
    });
  return res.clone();
}

export async function noCacheFetch(url: string) : Promise<Response> {
  return await fetch(
    url, 
    { 
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
}
