import { useEffect, useState } from "react";
import { useLang } from "../i18n/LanguageContext";

export default function Sidebar() {
  const { lang } = useLang();
  const [active, setActive] = useState("about");

  const sections = [
    { id: "about", label: lang === "es" ? "Sobre mí" : "About" },
    { id: "experience", label: lang === "es" ? "Experiencia" : "Experience" },
    { id: "contact", label: lang === "es" ? "Contacto" : "Contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Detectar sección activa (scroll spy)
  useEffect(() => {
    const handleScroll = () => {
      let current = "about";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lang]);

  return (
    <aside className="w-72 border-r border-white/10 p-6 hidden md:block">
      {/* TITLE */}
      <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-6">
        {lang === "es" ? "Navegación" : "Navigation"}
      </h2>

      {/* MENU */}
      <div className="relative flex flex-col gap-3">

        {/* Indicador lateral */}
        <div
          className="absolute left-0 w-[2px] bg-white transition-all duration-300"
          style={{
            top: `${sections.findIndex(s => s.id === active) * 40}px`,
            height: "24px",
          }}
        />

        {sections.map((section) => {
          const isActive = active === section.id;

          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`
                relative pl-4 text-left transition-all duration-300
                ${isActive ? "text-white" : "text-gray-500 hover:text-white"}
                hover:translate-x-1
              `}
            >
              {section.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
}