import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Link,
  Skeleton,
} from "@nextui-org/react";
import text from "node-html-parser/dist/nodes/text";

export default function FeedItemSkeleton() {
  return (
    <Card className="m-4">
      <CardHeader className="px-5">
        <Skeleton className="rounded-lg w-full">
          title <br />
          title
        </Skeleton>
      </CardHeader>
      <CardBody>
        <Skeleton className="rounded-lg w-full">
          <div className="h-32"></div>
        </Skeleton>
      </CardBody>
      <CardFooter className="flex flex-col justify-start items-start">
        <div className="flex my-1 gap-2 flex-wrap">
          <Skeleton className="rounded-xl">
            <Chip className="mr-1">topic</Chip>
          </Skeleton>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Skeleton className="rounded-xl">
                <Chip className="mr-1" key={i}>
                  tag
                </Chip>
              </Skeleton>
            ))}
        </div>
        <div className="my-2">
          <Skeleton className="rounded-xl">
            <Chip>author name</Chip>
          </Skeleton>
        </div>
        <div className="flex gap-2">
          <Skeleton className="rounded-lg">
            <div className="w-20 h-6"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="w-12"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="w-40"></div>
          </Skeleton>
        </div>
      </CardFooter>
    </Card>
  );
}
