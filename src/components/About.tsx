import { useLang } from "../i18n/LanguageContext";

export default function About() {
  const { lang } = useLang();

  return (
    <section id="about" className="mb-12 max-w-2xl">
      {/* TITLE */}
      <h2 className="text-xl mb-4 text-white">
        {lang === "es" ? "Sobre mí" : "About me"}
      </h2>

      {/* CONTENT */}
      <p className="text-gray-400 leading-relaxed">
        {lang === "es"
          ? "Desarrollador senior especializado en .NET, con experiencia construyendo APIs escalables y soluciones para el sector salud. Me enfoco en crear software limpio, eficiente y orientado a negocio."
          : "Senior developer specialized in .NET, experienced in building scalable APIs and solutions for the healthcare sector. I focus on clean, efficient, and business-oriented software."}
      </p>

      {/* EXTRA INFO */}
      <div className="mt-4 text-sm text-gray-500">
        {lang === "es"
          ? "📍 Colombia · 💻 Backend / Fullstack · 🚀 Construyendo productos"
          : "📍 Colombia · 💻 Backend / Fullstack · 🚀 Building products"}
      </div>
    </section>
  );
}