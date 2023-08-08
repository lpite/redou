import FeedItem from "@/components/FeedItem";
import FeedItemSkeleton from "@/components/FeedItemSkeleton";
import getFeed from "@/utils/getFeed";
import {
  Card,
  Navbar,
  NavbarBrand,
  NavbarContent,
  Skeleton,
} from "@nextui-org/react";
import Head from "next/head";
import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR("getFeed", getFeed);

  return (
    <main>
      {isLoading &&
        Array(10)
          .fill(0)
          .map(() => <FeedItemSkeleton />)}
      {!isLoading &&
        data?.map(
          (
            { title, author, date, tags, commentsQuantity, text, topic, views },
            i
          ) => (
            <FeedItem
              key={i}
              title={title}
              author={author}
              date={date}
              tags={tags}
              commentsQuantity={commentsQuantity}
              text={text}
              topic={topic}
              views={views}
            />
          )
        )}
    </main>
  );
}
