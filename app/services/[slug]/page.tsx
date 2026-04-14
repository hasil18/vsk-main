import { notFound } from "next/navigation";

export const dynamic = "force-static"; // 🔥 IMPORTANT

// ✅ Static params
export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:8000/api/services");

  if (!res.ok) return [];

  const data = await res.json();

  const services = Array.isArray(data)
    ? data
    : data.data || [];

  return services.map((item: any) => ({
    slug: String(item.slug),
  }));
}

// ✅ Page
export default async function ServiceDetailPage({ params }: any) {
  const { slug } = await params;

  if (!slug) return notFound();

  const res = await fetch(
    `http://127.0.0.1:8000/api/services/${slug}`
  );

  if (!res.ok) return notFound();

  const result = await res.json();
  const service = result.data || result;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* Image */}
        <div className="w-full bg-gray-200">
          <img
            src={
              service.image
                ? `http://127.0.0.1:8000/storage/${service.image}`
                : "/constructionimg5.png"
            }
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {service.title}
          </h1>

          <p className="text-gray-600 text-lg leading-8">
            {service.description || "No description available"}
          </p>
        </div>

      </div>
    </div>
  );
}