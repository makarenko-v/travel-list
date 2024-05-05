import { Item } from "../types";

interface ItemProps {
  item: Item;
  onToggled: (name: string) => void;
  onDeleted: (name: string) => void;
}

export function ListItem({ item, onToggled, onDeleted }: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onToggled(item.name)}
        checked={item.packed}
      />
      <p className={`${item.packed ? "packed" : ""}`}>
        {item.quantity} {item.name}
      </p>
      <button type="button" onClick={() => onDeleted(item.name)}>
        &times;
      </button>
    </li>
  );
}
