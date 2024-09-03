import Hero from "@/layout/hero";
import MoreStories from "@/layout/posts/more-stories";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery, heroQuery } from "@/sanity/lib/queries";
import { Suspense } from "react";
import PortableText from "../portable-text";
import { PostQueryResult } from "@/sanity.types";
import Link from "next/link";
import CoverImage from "@/layout/posts/cover-image";
import DateComponent from "@/layout/posts/date";
import Avatar from "@/layout/posts/avatar";

const PostsPage  = async () => {
  const [settings, latestPost] = await Promise.all([
      sanityFetch({ query: settingsQuery }),
      sanityFetch({ query: heroQuery }),
    ]);

    if (!latestPost) return;

    return (
      <div className="container postspage mx-auto px-5">
        <Intro title={settings?.title} description={settings?.description} />
        <HeroPost
          title={latestPost.title}
          slug={latestPost.slug}
          coverImage={latestPost.coverImage}
          excerpt={latestPost.excerpt}
          date={latestPost.date}
          author={latestPost.author}
        />
        <aside className="pb-20">
          <h2 className="mb-8 text-white text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
            More Posts
          </h2>
          <Suspense>
            <MoreStories skip={latestPost._id} limit={100} />
          </Suspense>
        </aside>
      </div>
    );
  
}

function Intro(props: { title: string | null | undefined; description: any }) {
  const title = props.title;
  const description = props.description
  return (
    <section className="mt-16 mb-16 flex  flex-col items-center lg:mb-12 lg:flex-row lg:justify-between">
      <h1 className="text-balance text-6xl text-secondary-color font-bold leading-tight tracking-tighter lg:pr-8 lg:text-8xl">
        {title}
      </h1>
      <h2 className="text-pretty mt-5  text-white text-center text-lg lg:pl-8 lg:text-left">
        <PortableText
          className="prose-lg"
          value={description}
        />
      </h2>
    </section>
  );
}

function HeroPost({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: Pick<
  Exclude<PostQueryResult, null>,
  "title" | "coverImage" | "date" | "excerpt" | "author" | "slug"
>) {
  return (
    <article>
      <Link className="group mb-8 block md:mb-16" href={`/posts/${slug}`}>
        <CoverImage image={coverImage} priority />
      </Link>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="text-pretty mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && (
            <p className="text-pretty mb-4 text-lg leading-relaxed">
              {excerpt}
            </p>
          )}
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </article>
  );
}

export default PostsPage;