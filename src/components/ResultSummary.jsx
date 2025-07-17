import { resultsData } from "../data/data";
import { iconMap } from "../data/data";
import SummaryItem from "./SummaryItem";

function ResultSummary() {
  return (
    <div className="space-y-4 p-6 md:w-1/2 ">
      <h2 className="font-bold">Summary</h2>
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
  );
}

export default ResultSummary;
