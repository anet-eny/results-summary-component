function ResultScore() {
  return (
    <div className="bg-gradient-to-b from-gradient2-start to-gradient2-end text-white flex flex-col items-center justify-center gap-4 p-8 md:w-1/2 rounded-b-2xl md:rounded-2xl">
      <h3 className="text-preset5-bold md:text-preset4 text-navy-200">
        Your result
      </h3>
      <div className="bg-gradient-to-b from-gradient2-start to-gradient2-end hover:from-gradient1-start hover:to-gradient1-end w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full flex flex-col items-center justify-center gap-1 ">
        <h1 className="text-white text-preset2 md:text-preset1">76</h1>
        <span className="text-preset6-bold md:text-preset5-bold text-navy-200">
          of 100
        </span>
      </div>
      <h2 className="text-preset4 md:text-preset3">Great</h2>
      <p className="text-center text-preset6 md:text-preset5 text-navy-200 px-4">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default ResultScore;
