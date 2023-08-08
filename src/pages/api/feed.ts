import { FeedItem } from "@/types/FeedItem";
import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "node-html-parser";



export default async function (_: NextApiRequest, res: NextApiResponse) {
  const feedItems: FeedItem[] = [];
  const text = await fetch("https://dou.ua/lenta/").then((t) => t.text());
  const html = parse(text);
  const feed = html.querySelectorAll(".b-postcard");
  feed.forEach((feedItem) => {
    const title =
      feedItem
        .querySelector(".title")
        ?.querySelector("a")
        ?.textContent.trim() || "";
    const author = feedItem.querySelector(".author")?.textContent.trim() || "";
    const date = feedItem.querySelector("time")?.textContent.trim() || "";
    const views =
      feedItem.querySelector(".pageviews")?.textContent.trim() || "";
    const text = feedItem.querySelector(".b-typo")?.textContent.trim() || "";
    const commentsQuantity =
      feedItem.querySelector(".g-comments-round")?.textContent.trim() || "0";
    const topicAndTags =
      feedItem
        .querySelector(".more")
        ?.textContent.trim()
        .replace("·", "")
        .replace(/\n/i, ",")
        .split(",")
        .map((el) => el.trim()) || [];

    feedItems.push({
      title,
      author,
      date,
      views,
      text,
      commentsQuantity,
      topic: topicAndTags[0],
      tags: topicAndTags.slice(1),
    });
  });
  res.status(200).json(feedItems);
}
