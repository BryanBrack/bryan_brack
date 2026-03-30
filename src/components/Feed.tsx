import PostCard from "./PostCard";
import { useLang } from "../i18n/LanguageContext";

type Post = {
  title: string;
  author: string;
  date: string;
  tags: string[];
};

const mockPosts: Post[] = [
  {
    title: "Desarrollador Senior",
    author: "bryanbrack@dev",
    date: "2 years ago",
    tags: ["AI", "prompt engineering", "OpenClaw"],
  },
  {
    title: "The Transactional Trap",
    author: "adam@whiskey.fm",
    date: "3 days ago",
    tags: ["AI", "prompt engineering", "OpenClaw"],
  },
];

export default function Feed() {
  const { t } = useLang();

  const count = mockPosts.length;

  return (
    <div>
      {/* HEADER */}
      <h1 className="text-2xl mb-6">
        {count} {t("posts")}{" "}
        <span className="text-gray-500">| {t("pastWeek")}</span>
      </h1>

      {/* LIST */}
      <div className="space-y-6">
        {mockPosts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </div>
  );
}