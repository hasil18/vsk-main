import Link from "next/link";

/* 🔥 Fetch blogs */
async function getBlogs() {
  const res = await fetch("http://127.0.0.1:8000/api/blogs");

  const result = await res.json();

  return result.data || result; // handle both API formats
}

/* 🔥 Card */
function BlogCard({ title, content, image, slug }: any) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">

      <div className="w-full bg-gray-100 rounded-lg">
        <img
          src={`http://127.0.0.1:8000/storage/${image}`}
          className="w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <p className="text-gray-600 text-sm mb-4">
          {content?.substring(0, 80)}...
        </p>

        <Link
          href={`/blog/${slug}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>

    </div>
  );
}

/* 🔥 MAIN PAGE */
export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div>

      {/* HERO */}
      <section className="relative text-center">

        <img src="/constructionimg4.png" className="w-full" />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Our Blog
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mt-2">
            Latest updates & construction insights
          </p>
        </div>

      </section>

      {/* BLOG GRID */}
      <section className="py-16 px-6 bg-gray-100">

        <h2 className="text-3xl font-bold text-center mb-10">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog: any) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

      </section>

    </div>
  );
}