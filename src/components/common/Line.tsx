import { FC } from 'react'
export interface LineProps {
  text?: string
}
const Line: FC<LineProps> = (props) => {
  const { text } = props
  return (
    <>
      <div className="flex items-center justify-center relative">
        
        <div className="flex items-center inset-0  absolute">
          <div className="border-t border-slate-300 dark:border-slate-700  h-px w-full"></div>
        </div>

        {text && <div className="px-1  relative"><span>{text}</span></div>}
      </div>
    </>
  )
}

export default Line