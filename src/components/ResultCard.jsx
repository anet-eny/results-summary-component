import ResultScore from "./ResultScore";
import ResultSummary from "./ResultSummary";

function ResultCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg md:flex max-w-xl mx-auto ">
      <ResultScore />
      <ResultSummary />
    </div>
  );
}

export default ResultCard;
