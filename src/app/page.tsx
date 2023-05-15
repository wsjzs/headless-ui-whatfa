import { FC, PropsWithChildren } from "react";
import Header from "~/components/layouts/AppLayout/Header";


const Index: FC<PropsWithChildren> = () => {
  return (
    <>
      <Header />
      <div>
        index
      </div>
    </>
  )
}

export default Index