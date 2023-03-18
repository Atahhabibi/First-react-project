import { socialLinksData } from "../data";

const SocialLinks = ({className,mainClassName}) => {
  return (

    <ul className={mainClassName}>
      

          {
              socialLinksData.map((link)=>{
                const {icon,id,href}=link;
                return <li key={id}>
                        <a href={href} target="_blank" className={className}><i className={icon}></i></a>
                     </li>
                })
          }
      
        </ul>

  )
}
export default SocialLinks