import ResultScore from "./ResultScore";
import ResultSummary from "./ResultSummary";

function ResultCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:flex gap-6 max-w-3xl mx-auto ">
      <ResultScore />
      <ResultSummary />
    </div>
  );
}

export default ResultCard;
