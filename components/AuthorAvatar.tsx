import { urlForImage } from 'lib/sanity.image'
import type { Author } from 'lib/sanity.queries'
import Image from 'next/image'

export default function AuthorAvatar(props: Author) {
  const { name, picture } = props
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-10 w-10 sm:h-8 sm:w-8 ">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(65).width(65).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={65}
          width={65}
          alt={picture?.alt ?? name}
        />
      </div>
      <div className="text-lg font-bold text-balance">{name}</div>
    </div>
  )
}
