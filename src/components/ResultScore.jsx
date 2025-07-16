function ResultScore() {
  return (
    <div className="bg-gradient-to-b from-violet-500 to-indigo-600 text-white flex flex-col items-center justify-center gap-4 p-6 md:w-1/2 rounded-b-2xl md:rounded-2xl">
      <h3 className="font-semibold">Your result</h3>
      <div className="bg-gradient-to-b from-violet-700 to-indigo-500 w-24 h-24 rounded-full flex flex-col items-center justify-center gap-1 ">
        <h1 className="text-white font-bold text-4xl">76</h1>
        <span className="text-xs font-normal">of 100</span>
      </div>
      <h2 className="text-lg font-semibold">Great</h2>
      <p className="text-center text-sm px-4">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default ResultScore;
