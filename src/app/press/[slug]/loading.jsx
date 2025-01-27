// src/app/press/[slug]/loading.jsx
export default function PressItemLoading() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 animate-pulse">
          {/* Header Placeholders */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>

          {/* Line Separator */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-72">
            {/* Content Column */}
            <div className="w-full md:w-7/12 order-2 md:order-1 space-y-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>

            {/* Image Placeholder */}
            <div className="w-full md:w-5/12 order-1 md:order-2">
              <div className="relative aspect-square bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
