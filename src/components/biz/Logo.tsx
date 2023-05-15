import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
const Logo: FC = () => (
  <>


    <Link href="/">
      {/* <div className=''>headless UI市场</div>
    <div>what<strong>Fa</strong></div> */}
      <Image src="/assets/img/svg/site-logo.svg" width="40" height="40" alt="site logo" />
      {/* <Image src="/assets/img/svg/dark-site-logo.svg" width="40" height="40" alt="site logo" /> */}
    </Link>
    <div className='flex flex-col ml-2'>
      <div><span>UI whatFa</span></div>
      <div >
        <span>free headless ui</span>
      </div>
    </div>
  </>
)

export default Logo