import { defineQuery } from "groq";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import CoverImage from "../../../../layout/posts/cover-image";
import MoreStories from "@/layout/posts/more-stories";

import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import PostHeader from "./postHeader";
import PostBody from "./postBody";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

const postSlugs = defineQuery(
  `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`,
);

export async function generateStaticParams() {
  return await sanityFetch({
    query: postSlugs,
    perspective: "published",
    stega: false,
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = await sanityFetch({ query: postQuery, params, stega: false });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function PostPage({ params }: Props) {
  const [post, settings] = await Promise.all([
    sanityFetch({ query: postQuery, params }),
    sanityFetch({ query: settingsQuery }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  return (
    <div className="blogpage">
      <CoverImage image={post.coverImage} priority />
      <section className="container">
        <PostHeader {...post} />
        <PostBody {...post} />
      </section>
      <aside className="pb-32 small:pl-4 small:pr-4 sm:pl-4 sm:pr-4 lg:pl-40 lg:pr-40">
        <hr className="border-accent-2 mb-24" />
        <div className="flex flex-row w-full">
          <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
            Recent Stories
          </h2>
          <div className="flex justify-end ml-auto hidden md:flex">
            <div className="kura_tm_button text-center sm:w-full md:w-fit h-auto clear-both">
              <Link className="rounded-full" href="/posts">
                View All Posts
              </Link>
            </div>
          </div>
        </div>
        <Suspense>
          <MoreStories skip={post._id} limit={2} />
        </Suspense>
        <div className="flex ml-auto flex md:hidden mt-16">
            <div className="kura_tm_button text-center sm:w-full md:w-fit h-auto clear-both">
              <Link className="rounded-full" href="/posts">
                View All Posts
              </Link>
            </div>
          </div>
      </aside>
    </div>
  );
}
