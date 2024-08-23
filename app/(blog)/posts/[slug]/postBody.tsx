import { PortableTextBlock } from "next-sanity"
import PortableText from "../../portable-text"
import { PostQueryResult } from "@/sanity.types"

export default (post: PostQueryResult) => {
  if (!post?._id) return
  return (
    <div className="post_body">
      {post.content?.length && (
        <PortableText
          className="mx-auto max-w-2xl"
          value={post.content as PortableTextBlock[]}
        />
      )}
    </div>
  )
}