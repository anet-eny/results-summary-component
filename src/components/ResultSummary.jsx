import { resultsData } from "../data/data";
import { iconMap } from "../data/data";
import { SummaryItem } from "./SummaryItem";

function ResultSummary() {
  return (
    <div>
      <h2>Summary</h2>
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
