import { FC, PropsWithChildren } from "react";
import NoteCardList from "~/components/biz/NoteCardList";
import Header from "~/components/layouts/AppLayout/Header";


const Index: FC<PropsWithChildren> = () => {
  return (
    <>
      <Header />
      <NoteCardList />
    </>
  )
}

export default Index