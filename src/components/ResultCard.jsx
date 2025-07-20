import ResultScore from "./ResultScore";
import ResultSummary from "./ResultSummary";

function ResultCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg md:flex max-w-[736px] w-[80%] md:h-512px mx-auto">
      <ResultScore />
      <ResultSummary />
    </div>
  );
}

export default ResultCard;
