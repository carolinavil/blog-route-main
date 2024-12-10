import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<
    Post, 
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >,
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="items-end">
        {excerpt && (
          <p className="mb-4 text-lg leading-relaxed text-pretty">
            {excerpt}
          </p>
        )}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-8">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mb-2 text-md">
          <Date dateString={date} />
      </div>
      {/* <div className="max-w-2xl">
        <div className="mb-6 block">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div> */}
    </>
  )
}
