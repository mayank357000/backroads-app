import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
         
         
          {/* //react mai array access kr skte hai obj nhi
          //data ke liey string ele mai jagah array of html ele 
          REDUNDANCY HATAI SAME STRUCTURE KI, DYNAMIC DATA BHEJA DATA.JS SE
          */}


          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}

          {/* <li>
            jab hamko scroll krna ho ek ele jiske pass id ho home ki 
            <a href="#home" className="nav-link">
              {" "}
              home{" "}
            </a>
          </li>

          <li>
            <a href="#about" className="nav-link">
              {" "}
              about{" "}
            </a>
          </li>

          <li>
            <a href="#services" className="nav-link">
              {" "}
              services{" "}
            </a>
          </li>

          <li>
            <a href="#tours" className="nav-link">
              {" "}
              tours
            </a>
          </li>
         */}
        </ul>
        <ul className="nav-icons">
          {/* //ye referrer bs security ke liye warning nhi toh aur target blank bs redirect pr pehlke blank dikhe  */}
          {socialLinks.map((link)=>{
            const {id,href,classx}=link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={classx}></i>
                </a>
              </li>
            );
          })}

        </ul>
      </div>
    </nav>
  );
}
export default Navbar