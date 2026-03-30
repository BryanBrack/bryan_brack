import { useLang } from "../i18n/LanguageContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const { lang, setLang } = useLang();

  return (
    <header className="flex justify-between items-center mb-8">

      {/* LEFT - LOGO */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border border-white/10 hover:scale-105 hover:border-white/30 transition-all duration-300"
        >
        <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQFm95feAkq-ng/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718223228926?e=1776297600&v=beta&t=5a3Y9SAA1DOjnpmeS_-wj1IcVX0FD4SdTx670RGRKc0"
            alt="Bryan Brack"
            className="w-full h-full object-cover"
        />
        </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* LANGUAGE */}
        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => setLang("es")}
            className={lang === "es" ? "text-white" : "text-gray-500"}
          >
            ES
          </button>
          <span className="text-gray-600">/</span>
          <button
            onClick={() => setLang("en")}
            className={lang === "en" ? "text-white" : "text-gray-500"}
          >
            EN
          </button>
        </div>

        {/* SOCIAL */}
        <a
          href="https://github.com/"
          target="_blank"
          className="text-gray-400 hover:text-white"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/bryan-brack-3306311a1/"
          target="_blank"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedin />
        </a>

      </div>
    </header>
  );
}