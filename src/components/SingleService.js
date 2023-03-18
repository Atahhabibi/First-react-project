
import { servicesData } from '../data';

const SingleService = () => {

  return (
    
        servicesData.map((service)=>{

          const {icon,text,title,id}=service;

          return <article className="service" key={id}>
          <span className="service-icon"><i className={icon}></i></span>
          <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">{text}</p>
          </div>
        </article>

          

        })
      
  )
}

export default SingleService
