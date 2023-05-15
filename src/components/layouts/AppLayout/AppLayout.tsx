import Head from 'next/head'
import type { FC, PropsWithChildren } from 'react'
// import Header from './Header'

export interface AppLayoutProps {

}
const AppLayout: FC<PropsWithChildren> = (props) => {
  return (
    <>
      <Head>
        <title>config whatfa</title>
        <meta name="description" content="a free headless ui community, share and find your ui, tailwindcss html react vue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <div>
        {props.children}
      </div>
    </>
  )
}

export default AppLayout