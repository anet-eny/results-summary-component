function SummaryItem({ category, score, Icon }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-xl p-3">
      <div className="flex items-center gap-2">
        <Icon className="text-xl" />
        <span className="text-preset6 md:text-preset5">{category}</span>
      </div>
      <div>
        <span className="text-gray-700 text-preset6-bold md:text-preset5-bold">
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
