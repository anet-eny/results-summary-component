import { resultsData } from "../data/data";
import { iconMap } from "../data/data";
import SummaryItem from "./SummaryItem";

function ResultSummary() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Summary</h2>
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
