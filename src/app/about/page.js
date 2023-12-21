import Link from 'next/link'
import React from 'react'
export const metadata ={
  title:"About"
}
function About() {
  return (
    <div>About
         <Link href="/about/team">Team</Link>
    </div>
  )
}

export default About