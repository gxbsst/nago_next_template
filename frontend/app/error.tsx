"use client";

import {useEffect} from 'react'
import Link from "next/link";

export default function Error({
                                error,
                                reset,
                              }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("500错误", error)
  }, [error])
  return <div className="flex items-center justify-center h-full">
    <h1>页面错误 – 500!</h1>
    <div>
      <Link href="/">继续浏览</Link>
    </div>
  </div>
}