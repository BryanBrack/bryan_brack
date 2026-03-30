import { useLang } from "../i18n/LanguageContext";

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export default function ExperienceModal({
  experience,
  onClose,
}: {
  experience: Experience;
  onClose: () => void;
}) {
  const { lang } = useLang();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
    >
      {/* CARD */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#121214] w-full max-w-2xl rounded-2xl p-8 border border-white/10 shadow-2xl animate-fadeIn"
      >
        {/* HEADER */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-semibold">
              {experience.role}
            </h2>
            <p className="text-sm text-gray-400">
              {experience.company} · {experience.period}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-lg"
          >
            ✕
          </button>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/5 px-2 py-1 rounded-md text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="text-sm text-blue-400 hover:underline"
          >
            {lang === "es" ? "Cerrar" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}