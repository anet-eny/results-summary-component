import { resultsData } from "../data/data";
import { iconMap } from "../data/data";
import SummaryItem from "./SummaryItem";

function ResultSummary() {
  return (
    <div className="p-6 md:w-1/2 ">
      <h2 className="font-bold text-2xl mb-8">Summary</h2>
      <div className="space-y-4">
        {resultsData.map((item) => {
          const Icon = iconMap[item.category];
          return (
            <SummaryItem
              key={item.category}
              category={item.category}
              score={item.score}
              Icon={Icon}
            />
          );
        })}
      </div>
      <button className="bg-gray-800 text-white text-lg w-full py-3 mt-8 rounded-full transition-colors">
        Continue
      </button>
    </div>
  );
}

export default ResultSummary;
