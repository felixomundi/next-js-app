import React from 'react'
import Link from 'next/link'
export const metadata ={
  title:"Our Team",
  
}
function Team() {
  return (
    <div>Team
         <Link href="/about">About</Link>
    </div>
   
  )
}

export default Team