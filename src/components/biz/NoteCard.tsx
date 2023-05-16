import { FC } from "react";
import Image from 'next/image'
import Link from "next/link";
import Like from "./Like";

export interface Image {
  width: number
  height: number
  url: string
}
export interface NoteCardProps {
  view: number
  nickname: string
  avatar: Image
  like: number
  thumbnail: Image
  id: string
}
const NoteCard: FC<NoteCardProps> = (props) => {
  const { view, nickname, avatar, like, thumbnail, id } = props


  return (
    <>
      <div className="  flex flex-col ">
        {/* top */}
        <div className="h-60 relative rounded-md overflow-hidden cursor-pointer">
          <Link href={'#'}>
            <Image
              src={thumbnail.url}
              alt="thumbnail"
              fill
            />
          </Link>
        </div>

        {/* bottom */}
        <div className="flex justify-between mt-2">
          {/* bottom__left */}
          <div className="flex">
            <div className="w-6 h-6 relative">
              <Image className="rounded-full shrink-0" src={avatar.url}
                // width="24" height="24" 
                fill
                alt="avatar" />
            </div>

            <span className="ml-2">{nickname}</span>
          </div>
          {/* bottom__right */}
          <div className="flex">
            <Like />
          </div>
        </div>
      </div>
    </>
  )
}

export default NoteCard