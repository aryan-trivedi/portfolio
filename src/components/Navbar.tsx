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
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  /* ================= Intersection Observer ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive((prev) =>
              prev !== entry.target.id ? entry.target.id : prev
            );
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* ================= Indicator Movement ================= */
  useEffect(() => {
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
    indicator.style.transform = `translate(${
      linkRect.left - navRect.left
    }px, -50%)`;
  }, [active]);

  /* ================= Resize Recalculation ================= */
  useEffect(() => {
    const handleResize = () => {
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
      indicator.style.transform = `translate(${
        linkRect.left - navRect.left
      }px, -50%)`;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active]);

  /* ================= Smooth Scroll ================= */
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    // Immediate activation (fixes pill delay)
    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar" ref={navRef}>
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
  );
};

export default Navbar;
