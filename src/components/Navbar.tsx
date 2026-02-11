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
  const [isScrolling, setIsScrolling] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);


  /* ================= SCROLL DETECTION ================= */

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return; // 🔥 freeze updates during smooth scroll

      const scrollPosition = window.scrollY + 140;

      let currentSection = sections[0];

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          currentSection = sections[i];
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  /* ================= INDICATOR MOVEMENT ================= */

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
    indicator.style.transform = `translateX(${linkRect.left - navRect.left}px) translateY(-50%)`;
  }, [active]);

  /* ================= CLICK HANDLER ================= */

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    setMenuOpen(false);
    setActive(id);

    // 🔥 Freeze scroll detection
    setIsScrolling(true);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // 🔥 Unfreeze after scroll finishes
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 700); // duration of smooth scroll
  };

  return (
    <>
      {/* TOP BAR (Mobile) */}
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
