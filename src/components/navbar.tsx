import { useState, useEffect } from "react";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  //console.log("MenuOpen:", menuOpen);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-icon">SK</div>
        <ul className="menu-bar">
          <li className="menu-item active">
            <Link to="home" smooth duration={500} offset={-80}>
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="experience" smooth duration={500} offset={-80}>
              Experience
            </Link>
          </li>
          <li className="menu-item">
            <Link to="skills" smooth duration={500} offset={-80}>
              Skills
            </Link>
          </li>
        </ul>
        <Link to="contact" smooth duration={500} offset={500}>
          <button className="contact-btn">Contact me</button>
        </Link>
        {
          isMobile &&
          (<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>)
        }
      </nav>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="menu-popup" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setMenuOpen(false)}>✕</span>
            <ul>
              <Link to="home" smooth duration={500} offset={500}>
                <li onClick={() => setMenuOpen(false)}>Home</li>
              </Link>

              <Link to="experience" smooth duration={500} offset={500}>
                <li onClick={() => setMenuOpen(false)}>Experience</li>
              </Link>

              <Link to="skills" smooth duration={500} offset={500}>
                <li onClick={() => setMenuOpen(false)}>Skills</li>
              </Link>

              <Link to="contact" smooth duration={500} offset={500}>
                <li onClick={() => setMenuOpen(false)}>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
