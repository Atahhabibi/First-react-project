
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";


const Footer = () => {
  return (
    <footer className="section footer">
     <PageLinks className={'footer-link'} mainClassName={"footer-links"}/>

     <SocialLinks className={'footer-icon'} mainClassName={'footer-icons'}/>

   
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer