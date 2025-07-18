function SummaryItem({ category, score, Icon }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-xl p-3">
      <div className="flex items-center gap-2">
        <Icon className="text-xl" />
        <span className="text-lg">{category}</span>
      </div>
      <div>
        <span className="text-gray-700 font-bold text-lg">{score}</span>
        <span className="text-gray-400 font-bold text-lg"> / 100</span>
      </div>
    </div>
  );
}

export default SummaryItem;
