type Post = {
  title: string;
  tags: string[];
  author: string;
  date: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-[#121214] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition">
      
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-400">{post.author}</span>
        <span className="text-xs text-gray-500">{post.date}</span>
      </div>

      <h3 className="text-lg font-semibold mb-3">
        {post.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="text-xs bg-white/5 px-2 py-1 rounded-md text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}