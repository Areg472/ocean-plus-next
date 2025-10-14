"use client";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center font-sans bg-black text-white relative">
      <style jsx global>{`
        body {
          background: black none !important;
        }
      `}</style>
      <div className="flex items-center">
        <h1 className="text-2xl font-normal pr-6 mr-6 border-r border-gray-700">
          404
        </h1>
        <div>
          <h2 className="text-sm font-normal m-0 p-0">
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  );
}
