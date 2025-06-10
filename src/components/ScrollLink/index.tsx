"use client"

import Link from "next/link"

function ScrollLink({ refId, children, ...props }) {
  return (
    <Link
      href={`#${refId}`}
      {...props}
      onClick={(e) => {
        e.preventDefault()
        const element = document.getElementById(refId)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }}
    >
      {children}
    </Link>
  )
}

export default ScrollLink
