// import {notFound} from "next/navigation"
import Link from "next/link";

export default function Custom404() {
  // return <h1>页面不存在</h1>
  // notFound()
  return <div className="flex items-center justify-center h-full">
    <h1>页面不存在 – 404!</h1>
    <div>
      <Link href="/">继续浏览</Link>
    </div>
  </div>
}