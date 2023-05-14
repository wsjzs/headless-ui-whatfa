import '../assets/styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '~/components/layouts/AppLayout/AppLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
