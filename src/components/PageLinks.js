import React from 'react'
import { pageLinksData } from '../data';

const PageLinks = ({className,mainClassName}) => {
  return (
    <ul className={mainClassName} id="nav-links">
    {
      pageLinksData.map((link)=>{
        const {text,id,href}=link;
        return <li key={id}><a href={href} className={className}> {text} </a></li>
      })
    }
  
  
  </ul>
  )
}

export default PageLinks
