import CoverImage from "./coverImage"
import Link from "next/link";

const PostCards = ({ post }: { post: any}) => {
  const { _id, title, slug, coverImage, excerpt, author } = post;

  return (
    <div className="relative flex flex-col sm:flex-row md:flex-col items-start">
      <div className="order-1 sm:ml-6 md:ml-0">
        <h3 className="mb-1 md:mt-10 xl:mt-0 text-slate-900 font-semibold">
          {title}
        </h3>
        <p className="text-pretty mb-4 text-lg leading-relaxed">{excerpt}</p>
        <Link
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition transition-all duration-200 focus:ring-slate-500 mt-6"
          href={`/posts/${slug}`}>Read it
          <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 transition transition-all duration-200"
              width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 0L3 3L0 6"></path>
          </svg>
        </Link>
      </div>
      <CoverImage image={coverImage} priority={false} link={`/posts/${slug}`} />
    </div>
  )
}

export default PostCards