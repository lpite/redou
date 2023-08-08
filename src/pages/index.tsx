import FeedItem from "@/components/FeedItem";
import getFeed from "@/utils/getFeed";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Head from "next/head";
import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR("getFeed", getFeed);

  return (
    <main>
      {data?.map(
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
