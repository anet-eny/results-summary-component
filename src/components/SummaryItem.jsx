function SummaryItem({ category, score, Icon }) {
  return (
    <div>
      <div>
        <Icon />
        <span>{category}</span>
      </div>
      <span>{score} / 100</span>
    </div>
  );
}

export default SummaryItem;
