import Link from "next/link";
import { FC } from "react";

const Index: FC = () => {
  return (
    <>
      <div>Hello World</div>
      <Link href="/home">Go Home</Link>
    </>
  )
}

export default Index