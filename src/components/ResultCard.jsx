import ResultScore from "./ResultScore";
import ResultSummary from "./ResultSummary";

function ResultCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg md:flex max-w-[736px] md:w-[80%] min-h-screen md:min-h-0 md:h-[512px] mx-auto">
      <ResultScore />
      <ResultSummary />
    </div>
  );
}

export default ResultCard;
