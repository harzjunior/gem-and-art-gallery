// src/app/loading.jsx
export default function HomeLoading() {
  return (
    <main className="relative min-h-screen">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Image and Navigation Container */}
            <div className="relative w-full">
              <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] mb-4 sm:mb-8 animate-pulse bg-gray-200"></div>
            </div>

            <div className="text-center space-y-1 text-sm w-full px-2 sm:px-4">
              {/* Title and basic info */}
              <div className="space-y-2 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
              </div>

              {/* Provenance section */}
              <div className="mt-6 space-y-2 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mx-auto"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5 mx-auto"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mx-auto"></div>
              </div>

              {/* Exhibitions section */}
              <div className="mt-6 space-y-2 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto"></div>
              </div>

              {/* Literature section */}
              <div className="mt-6 space-y-2 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5 mx-auto"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
