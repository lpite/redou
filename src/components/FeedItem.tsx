import { FeedItem } from "@/types/FeedItem";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import Link from "next/link";

export default function FeedItem({
  title,
  text,
  date,
  commentsQuantity,
  views,
  tags,
  author,
  topic,
}: FeedItem) {
  return (
    <Card className="m-4">
      <CardHeader className="px-5">
        <h2 className="font-bold">
          <Link href="/">{title}</Link>
        </h2>
      </CardHeader>
      <CardBody>
        <p>{text}</p>
      </CardBody>
      <CardFooter className="flex flex-col justify-start items-start">
        <div className="flex my-1 gap-2 flex-wrap">
          <Chip className="mr-1" color="primary">
            {topic}
          </Chip>
          {tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        <div className="my-2">
          <Chip variant="bordered">{author}</Chip>
        </div>
        <p>
          <span className="mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="inline-block mr-2"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
            {views}
          </span>
          <span className="mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="inline-block mr-2"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg>
            {commentsQuantity}
          </span>
          <span className="mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="inline-block mr-2"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            {date}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
}
