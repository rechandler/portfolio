
import { sanityFetch } from "@/sanity/lib/fetch";
import { moreStoriesSkipQuery } from "@/sanity/lib/queries";
import PostCards from "@/components/post/postCards";

export default async function MoreStories(params: {
  skip: string;
  limit: number;
}) {
  const stories = await sanityFetch({ query: moreStoriesSkipQuery, params });

  return (
    <>
      <div className="grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {stories?.map((post: any) => {
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
