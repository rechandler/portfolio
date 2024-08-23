import Link from "next/link";

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";

import { sanityFetch } from "@/sanity/lib/fetch";
import { moreStoriesQuery, moreStoriesSkipQuery } from "@/sanity/lib/queries";
import { MoreStoriesQueryResult, PostQueryResult } from "@/sanity.types";
import PostCards from "@/components/post/postCards";

export default async function MoreStories(params: {
  skip: string;
  limit: number;
}) {
  const data = await sanityFetch({ query: moreStoriesSkipQuery, params });

  return (
    <>
      <div className="grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {data?.map((post: any) => {
          return (
            <div key={`post_list_${post._id}`}>
              <PostCards post={post}/>
            </div>
          );
        })}
      </div>
    </>
  );
}
