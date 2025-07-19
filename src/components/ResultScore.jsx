function ResultScore() {
  return (
    <div className="bg-gradient-to-b from-violet-500 to-indigo-600 text-white flex flex-col items-center justify-center gap-4 p-6 md:w-1/2 rounded-b-2xl md:rounded-2xl">
      <h3 className="text-preset5-bold">Your result</h3>
      <div className="bg-gradient-to-b from-violet-700 to-indigo-500 w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full flex flex-col items-center justify-center gap-1 ">
        <h1 className="text-white text-preset2">76</h1>
        <span className="text-preset6-bold">of 100</span>
      </div>
      <h2 className="text-preset4">Great</h2>
      <p className="text-center text-preset6 px-4">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default ResultScore;
