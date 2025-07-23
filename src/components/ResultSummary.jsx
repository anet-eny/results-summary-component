import { resultsData } from "../data/data";
import { iconMap } from "../data/data";
import SummaryItem from "./SummaryItem";

function ResultSummary() {
  return (
    <div className="p-8 md:w-1/2 ">
      <h2 className="font-bold text-preset5-bold md:text-preset4 mb-8">
        Summary
      </h2>
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
      <button className="bg-navy-950 hover:bg-gradient-to-b hover:from-gradient2-start hover:to-gradient2-end text-white text-preset5-bold w-full py-4 mt-8 rounded-full transition-colors">
        Continue
      </button>
    </div>
  );
}

export default ResultSummary;
