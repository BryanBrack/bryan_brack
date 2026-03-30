import { useState } from "react";
import ExperienceModal from "./ExperienceModal";
import { useLang } from "../i18n/LanguageContext";

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

  return (
    <>
      <div className="bg-[#121214] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{experience.role}</h3>
          <span className="text-xs text-gray-500">{experience.period}</span>
        </div>

        {/* COMPANY */}
        <p className="text-sm text-gray-400 mb-3">
          {experience.company}
        </p>

        {/* DESCRIPTION (preview) */}
        <p className="text-gray-300 mb-3 leading-relaxed line-clamp-2">
          {experience.description}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="text-sm text-blue-400 hover:underline mb-4"
        >
          {lang === "es" ? "Ver más" : "Show more"}
        </button>

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
      </div>

      {/* MODAL */}
      {open && (
        <ExperienceModal
          experience={experience}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}