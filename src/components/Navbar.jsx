import { useState } from "react";
import "./styles/Navbar.css";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

function Navbar({ activeSection, scrolled, onNavClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    onNavClick(section);
    setMenuOpen(false);
  };

  // return (
  //   <nav className={`portfolio-nav ${scrolled ? "scrolled" : ""}`}>
  //     <div className="navvvv">
  //       <span className="nav-brand">Portfolio</span>

  //       {/* Desktop Links */}
  //       <div className="desktop-nav d-flex gap-4">
  //         {NAV_LINKS.map((s) => (
  //           <button
  //             key={s}
  //             className={`nav-link-item ${activeSection === s ? "active" : ""}`}
  //             onClick={() => handleClick(s)}
  //           >
  //             {s}
  //           </button>
  //         ))}
  //       </div>

  //       {/* Hamburger */}
  //       <button
  //         className="hamburger"
  //         onClick={() => setMenuOpen((prev) => !prev)}
  //         aria-label="Toggle menu"
  //       >
  //         {menuOpen ? "✕" : "☰"}
  //       </button>
  //     </div>

  //     {/* Mobile Dropdown */}
  //     <div className={`mobile-nav-menu container-fluid ${menuOpen ? "open" : ""}`}>
  //       {NAV_LINKS.map((s) => (
  //         <button
  //           key={s}
  //           className={`nav-link-item ${activeSection === s ? "active" : ""}`}
  //           style={{ textAlign: "left", padding: "10px 0" }}
  //           onClick={() => handleClick(s)}
  //         >
  //           {s}
  //         </button>
  //       ))}
  //     </div>
  //   </nav>
  // );
  return (
  <nav className={`portfolio-nav ${scrolled ? "scrolled" : ""}`}>
    
    {/* ✅ ADD THIS WRAPPER (IMPORTANT) */}
    <div className="nav-container">

      <span className="nav-brand">Portfolio</span>

      {/* Desktop Links */}
      <div className="desktop-nav">
        {NAV_LINKS.map((s) => (
          <button
            key={s}
            className={`nav-link-item ${activeSection === s ? "active" : ""}`}
            onClick={() => handleClick(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </div>

    {/* Mobile Dropdown */}
    <div className={`mobile-nav-menu ${menuOpen ? "open" : ""}`}>
      {NAV_LINKS.map((s) => (
        <button
          key={s}
          className={`nav-link-item ${activeSection === s ? "active" : ""}`}
          onClick={() => handleClick(s)}
        >
          {s}
        </button>
      ))}
    </div>

  </nav>
);
}

export default Navbar;