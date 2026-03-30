import { useLang } from "../i18n/LanguageContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { lang } = useLang();

  return (
    <section id="contact" className="mt-16 max-w-2xl">
      {/* TITLE */}
      <h2 className="text-xl mb-4">
        {lang === "es" ? "Contacto" : "Contact"}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mb-6">
        {lang === "es"
          ? "¿Quieres trabajar conmigo o tienes una idea? Estoy abierto a oportunidades y colaboraciones."
          : "Want to work together or have an idea? I'm open to opportunities and collaborations."}
      </p>

      {/* ACTIONS */}
      <div className="flex flex-wrap gap-4">

        {/* EMAIL */}
        <a
          href="mailto:bryanbrack@dev"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

      </div>
    </section>
  );
}