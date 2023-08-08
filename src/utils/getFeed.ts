import { API_ROUTES } from "@/config";
import { FeedItem } from "@/types/FeedItem";

export default async function getFeed(): Promise<FeedItem[]> {
  try {
    const feed = await fetch(API_ROUTES.GET_FEED).then((res) => res.json());
    return feed;
  } catch (error) {
    console.error(error);
    return [];
  }
}
