const CodeListkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-lg p-4 shadow animate-pulse min-h-[300px] flex flex-col gap-4"
        >
          <div className="bg-gray-300 h-6 w-2/3 mb-2 rounded" />
          <div className="bg-gray-300 h-4 w-full mb-2 rounded" />
          <div className="bg-gray-300 h-4 w-full mb-4 rounded" />
          <div className="flex-grow bg-gray-300 h-36 rounded" />{" "}
          {/* Placeholder for code snippet */}
          <div className="p-2 flex justify-between items-center">
            <div className="bg-gray-300 h-8 w-1/4 rounded" />
            <div className="bg-gray-300 h-8 w-1/4 rounded" />
            <div className="bg-gray-300 h-8 w-1/4 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export { CodeListkeleton };
