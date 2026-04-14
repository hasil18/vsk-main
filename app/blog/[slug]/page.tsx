import { notFound } from "next/navigation";

export const dynamic = "force-static"; // 🔥 IMPORTANT

// ✅ STEP 1: generate static paths
export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:8000/api/blogs");

  if (!res.ok) return [];

  const data = await res.json();

  const blogs = Array.isArray(data)
    ? data
    : data.data || [];

  return blogs.map((blog: any) => ({
    slug: String(blog.slug),
  }));
}

// ✅ STEP 2: fetch single blog
async function getBlog(slug: string) {
  const res = await fetch(`http://127.0.0.1:8000/api/blogs/${slug}`);

  if (!res.ok) return null;

  const result = await res.json();

  return result.data || result;
}

// ✅ STEP 3: server component
export default async function SingleBlog({ params }: any) {
  const { slug } = await params;

  if (!slug) return notFound();

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      <img
        src={
          blog.image
            ? `http://127.0.0.1:8000/storage/${blog.image}`
            : "/constructionimg5.png"
        }
        className="w-full h-full object-cover rounded-lg mb-6"
        alt={blog.title}
      />

      <h1 className="text-3xl font-bold mb-4">
        {blog.title}
      </h1>

      <p className="text-gray-700 leading-relaxed">
        {blog.content}
      </p>

    </div>
  );
}