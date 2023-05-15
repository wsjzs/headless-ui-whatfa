import { FC, PropsWithChildren } from "react";
import Header from "~/components/layouts/AppLayout/Header";


const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout