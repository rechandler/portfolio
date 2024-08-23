import Avatar from "@/layout/posts/avatar"
import DateComponent from "@/layout/posts/date"
import { PostQueryResult } from "@/sanity.types"

const PostHeader = (post: PostQueryResult) => {

  if (!post?._id) return

  return (
    <section className="blog_hero">
      <div className="mx-auto max-w-2xla">
        <h1 className="name text-[45px] inline-block mb-[16px] text-white font-poppins font-medium">
          {post?.title}
        </h1>
        <div className="hidden md:mb-2 md:block">
          {post?.author && (
            <Avatar name={post.author.name} picture={post.author.picture} />
          )}
        </div>
        <div className="mb-6 text-lg">
          <div className="mb-4 text-lg">
            <DateComponent dateString={post.date} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostHeader