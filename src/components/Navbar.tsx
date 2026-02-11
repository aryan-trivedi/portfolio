import { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";

const sections = [
  "home",
  "education",
  "experience",
  "projects",
  "skills",
  "certifications",
  "contact",
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const nav = navRef.current;
    const indicator = indicatorRef.current;
    if (!nav || !indicator) return;

    const activeLink = nav.querySelector(
      `a[data-id="${active}"]`
    ) as HTMLAnchorElement | null;

    if (!activeLink) return;

    const linkRect = activeLink.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    indicator.style.width = `${linkRect.width}px`;
    indicator.style.transform = `translate(${linkRect.left - navRect.left}px, -50%)`;
  }, [active]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setActive(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="logo">Aryan Trivedi</div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* DESKTOP NAV */}
      <div className="navbar-wrapper">
        <div className="navbar desktop" ref={navRef}>
          <div ref={indicatorRef} className="nav-indicator" />
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              data-id={sec}
              onClick={(e) => handleClick(e, sec)}
              className={active === sec ? "active" : ""}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-overlay ${menuOpen ? "show" : ""}`}>
        <div className="mobile-menu">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={(e) => handleClick(e, sec)}
              className={active === sec ? "active" : ""}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
