import logImg from '../images/logo.svg'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'



const Navbar = () => {
  return (
    <><nav className="navbar">

      <div className="nav-center">

        <div className="nav-header">
          <img src={logImg} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      
        <PageLinks className={"nav-link"} mainClassName={"nav-links"}/>
        <SocialLinks className={'nav-icon'} mainClassName={'nav-icons'}/>

      </div>
    </nav>
      
    </>
  )
}

export default Navbar
