import { servicesData } from "../data"
import SingleService from "./SingleService"
import Title from "./Title"


const Service = () => {
  return (
   
    <section className="section services" id="services">
      <Title title={"our"} span={"services"}/>

      <div className="section-center services-center">

      <SingleService />

      </div>
      
    </section>
  )
}

export default Service
