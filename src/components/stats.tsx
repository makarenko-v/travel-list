interface StatsProps {
  itemsCount: number;
  packedItemsCount: number;
}

export function Stats({ itemsCount, packedItemsCount }: StatsProps) {
  if (itemsCount === 0) {
    return (
      <footer className="footer">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const packedPercentage = Math.round((packedItemsCount / itemsCount) * 100);

  return (
    <footer className="footer">
      {packedPercentage === 100 ? (
        <em>Ready to go ✈️</em>
      ) : (
        <em>
          💼 You have {itemsCount} items on your list, and you already packed{" "}
          {packedItemsCount} ({packedPercentage}%)
        </em>
      )}
    </footer>
  );
}
