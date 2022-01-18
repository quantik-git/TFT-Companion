const SkeletonCompCard = () => {
  return (
    <div className="bg-white shadow-md px-8 py-6 mb-4 mx-6 rounded-md border flex flex-col">
      <div className="animate-pulse flex flex-col">
        <div className="inline-flex items-baseline mb-3">
          <div className="h-8 w-1/5 bg-slate-600 rounded mr-2"></div>
          <div className="h-4 w-10 bg-slate-600 rounded mr-2"></div>
          <div className="h-2 w-6 bg-slate-400 rounded mr-2"></div>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-4">
          <div className="flex flex-col col-span-2">
            <div className="h-4 w-96 bg-slate-600 rounded mr-2 mb-2"></div>
            <div className="h-2 w-20 bg-slate-400 rounded mr-2 mb-2"></div>
          </div>

          <div className="col-span-1 flex">
            <div className="h-2 w-24 bg-slate-600 rounded mr-2"></div>
          </div>

          <div className="flex flex-col col-span-2">
            <div className="h-4 w-32 bg-slate-600 rounded mr-2 mb-2"></div>
            <div className="h-2 w-16 bg-slate-400 rounded mr-2 mb-2"></div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="h-8 w-20 bg-slate-400 rounded mr-2"></div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSkeleton = () => {
  const list = [...Array(10).keys()];

  return (
    <section className="container mx-auto">
      <ul>
        {list.map((index) => {
          return <SkeletonCompCard key={index} />;
        })}
      </ul>
    </section>
  );
};
