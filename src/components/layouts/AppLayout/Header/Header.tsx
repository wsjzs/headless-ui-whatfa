import Link from 'next/link'
import { memo } from 'react'
import Logo from '~/components/biz/Logo'




const Header = memo(() => {
  // const handleSign=()=>{
  //   router.push("/sign")
  // }
  return (
      <header className='p-3'>
        <nav className='min-h-20 flex justify-between'>
        {/* left */}
          <div className='flex'>
            <Logo />
            <div className="flex flex-col">
                {/* <span>config whatFa</span> */}
                {/* <span>a free config hub</span> */}
            </div>
          </div>
          
          <Link href="/sign">
            Sign in
          </Link>
        </nav>
      </header>
  )
})

Header.displayName='Header'

export default Header