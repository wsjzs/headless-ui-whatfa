import Image from "next/image";
import { FC } from "react";


export enum ThirdPartName {
  TWITTER = 'twitter'
}

const ThirdPartNameMap = {
  [ThirdPartName.TWITTER]: {
    logo: '/assets/img/svg/twitter-logo.svg',
    label: 'Twitter',
    cardClass: 'bg-[#1D9BF0]',
  }
}

export interface ThirdPartCardProps {
  name: ThirdPartName
}
const ThirdPartCard: FC<ThirdPartCardProps> = (props) => {
  const { logo, label, cardClass } = ThirdPartNameMap[props.name]
  return (
    <>
      <div className={`flex items-center justify-center px-3 py-1.5 rounded ${cardClass}`}>
        <Image src={logo} className="w-5 h-5" alt="logo" />
        <div className="ml-3 text-slate-50  bg-inherit"><span>{label}</span></div>
      </div>
    </>
  )
}

export default ThirdPartCard