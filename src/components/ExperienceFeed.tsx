import ExperienceCard from "./ExperienceCard";
import { useLang } from "../i18n/LanguageContext";

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

const experiences: Experience[] = [
  {
    role: "Senior .NET Developer",
    company: "HealthTech",
    period: "2022 - Present",
    description:
      "Construcción de APIs escalables en .NET 8, optimización de consultas SQL y migración de sistemas legacy.",
    tags: [".NET", "SQL", "Azure", "Dapper"],
  },
  {
    role: "Fullstack Developer",
    company: "Tecnitia",
    period: "2020 - 2022",
    description:
      "Desarrollo de aplicaciones web con Angular y .NET, integración de servicios y mantenimiento de sistemas.",
    tags: ["Angular", ".NET", "REST APIs"],
  },
];

export default function ExperienceFeed() {
  const { lang } = useLang();

  return (
    <div id="experience">
      {/* HEADER */}
      <h1 className="text-2xl mb-6">
        {lang === "es" ? "Experiencia" : "Experience"}
      </h1>

      {/* LIST */}
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} />
        ))}
      </div>
    </div>
  );
}