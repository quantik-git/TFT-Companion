const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
};

const CompCard = ({
  rank,
  carries,
  synergies,
  lolchess,
  carousel,
  items,
  difficulty,
  rolling,
  early
}) => {
  const tierMap = {
    "TIER 1": "bg-violet-100 text-violet-900",
    "TIER 2": "bg-blue-100 text-blue-900",
    "TIER 3": "bg-yellow-100 text-yellow-900",
    "TIER 4": "bg-orange-100 text-orange-900",
    "TIER 5": "bg-red-100 text-red-900"
  };

  return (
    <div className="bg-white shadow-md px-8 py-6 mb-4 mx-6 rounded-md border flex flex-col">
      <div className="inline-flex items-baseline mb-2">
        <p className="font-bold text-2xl align-middle mr-2">{synergies}</p>

        <span
          className={`rounded-full px-2 py-1 text-xs font-bold mr-2 ${tierMap[rank]}`}
        >
          {rank}
        </span>

        <p className="font-bold text-xs text-gray-600">{difficulty}</p>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-4">
        <div className="flex flex-col col-span-2">
          <p className="font-bold">{early}</p>
          <p className="text-sm font-bold text-gray-600">{carousel}</p>
        </div>

        <p className="col-span-1 flex">
          <ArrowRight />
          &emsp;{rolling}&emsp;
          <ArrowRight />
        </p>

        <div className="flex flex-col col-span-2">
          <p className="font-bold">{carries}</p>
          <p className="text-sm font-bold text-gray-600">{items}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <a
          className="px-3 py-1 rounded text-white font-bold bg-teal-500 hover:bg-teal-600"
          href={lolchess}
          target="_blank"
          rel="noreferrer"
        >
          Open
        </a>
      </div>
    </div>
  );
};

export const CompList = ({ compList }) => {
  return (
    <section className="container mx-auto">
      <ul>
        {compList.map((comp, index) => {
          return <CompCard key={index} {...comp} />;
        })}
      </ul>
    </section>
  );
};
