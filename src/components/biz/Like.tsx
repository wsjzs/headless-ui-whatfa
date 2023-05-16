'use client';
import Image from "next/image";
import { FC } from "react";
import Heart from "../common/Heart";

export interface LikeProps {
  liked?: boolean
  count?: number
}
const Like: FC<LikeProps> = ({ liked = false, count = 0 }) => {
  const handleLike = () => {
    alert('hello like')
  }
  return (
    <>
      <div className="flex items-center" onClick={handleLike}>
        {/* <Image className="cursor-pointer" src='/assets/img/svg/like_fill.svg' alt="like" width={17} height={17} /> */}
        <div className="fill-gray-400 cursor-pointer hover:fill-red-400 transition-[fill] duration-200">
          <Heart />
        </div>
        <span className="ml-1">{count}</span>
      </div>
    </>
  )
}
export default Like