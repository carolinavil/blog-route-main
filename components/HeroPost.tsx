import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >,
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  return (
    <section className="md:grid grid-cols-2">
      <div className="mb-8 md:mb-16 lg:mr-5">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="grid mb-10 md:mb-0 md:grid md:grid-rows-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-1 text-4xl leading-tight lg:text-6xl text-balance">
            <Link href={`/posts/${slug}`} className="hover:underline font-bold">
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className="mb-4 text-sm md:mb-2 md:mt-4">
            <Date dateString={date} />
          </div>
        </div>
        <div className='items-end'>
          {excerpt && (
            <p className="mb-4 text-lg leading-relaxed text-pretty">
              {excerpt}
            </p>
          )}
          {/* {author && (
            <AuthorAvatar name={author.name} picture={author.picture} />
          )} */}
        </div>
      </div>
    </section>
  )
}
