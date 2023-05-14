import {useRouter} from 'next/router'
import { memo ,} from 'react'
import Logo from '~/components/biz/Logo'




const Header = memo(() => {
  const router=useRouter()
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
          
          <a href="/sign">
            sign
          </a>
        </nav>
      </header>
  )
})

Header.displayName='Header'

export default Header