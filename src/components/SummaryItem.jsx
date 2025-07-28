function SummaryItem({ category, score, Icon, textColor, bgColor }) {
  return (
    <div
      className={`flex items-center justify-between ${bgColor} rounded-xl p-4`}
    >
      <div className="flex items-center gap-2">
        <Icon className={`text-xl ${textColor} `} />
        <span className={`text-preset6 md:text-preset5 ${textColor}`}>
          {category}
        </span>
      </div>
      <div>
        <span className="text-navy-950 text-preset6-bold md:text-preset5-bold">
          {score}
        </span>
        <span className="text-gray-400 text-preset6-bold md:text-preset5-bold">
          {" "}
          / 100
        </span>
      </div>
    </div>
  );
}

export default SummaryItem;
