import { FC } from "react";
import NoteCard, { NoteCardProps } from "../NoteCard";
import styles from './list.module.css'

export interface NoteCardListProps {

}

const defaultImgUrl = 'https://cdn.dribbble.com/userupload/6988304/file/original-78c5a01bdfa83026c8109e2f146e88fb.png?compress=1&resize=840x630&vertical=top'
function makeImage(width = 400, height = 320, url = defaultImgUrl) {
  return ({ width, height, url })
}

const NoteCardList: FC = () => {
  const list: NoteCardProps[] = [
    {
      nickname: 'hello world',
      thumbnail: makeImage(),
      view: 12,
      avatar: makeImage(),
      like: 32,
      id: '2323',
    },
    {
      nickname: 'hello world',
      thumbnail: makeImage(),
      view: 12,
      avatar: makeImage(),
      like: 32,
      id: 'dq',
    },
    {
      nickname: 'hello world',
      thumbnail: makeImage(),
      view: 12,
      avatar: makeImage(),
      like: 32,
      id: 'dq',
    },
  ]
  const listRender = list.map((note, idx) => (
    <NoteCard key={idx} {...note} />
  ))
  return (
    <div className={`grid px-8 gap-9 ${styles.list}`}>
      {listRender}
    </div>
  )
}

export default NoteCardList