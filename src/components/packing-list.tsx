import React from "react";

import { Item, SortBy } from "../types";
import { ListItem } from "./item";

interface PackingListProps {
  items: Item[];
  onItemToggled: (name: string) => void;
  onItemDeleted: (name: string) => void;
  onSort: (sort: SortBy) => void;
  onClear: () => void;
}

export function PackingList({
  items,
  onItemToggled,
  onItemDeleted,
  onSort,
  onClear,
}: PackingListProps) {
  return (
    <main className="list-container">
      <ul>
        {items.map((item) => (
          <ListItem
            item={item}
            onToggled={onItemToggled}
            onDeleted={onItemDeleted}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          className="sort-select"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            onSort(e.target.value as SortBy);
          }}
        >
          <option value="input">Sort by input order</option>
          <option value="name">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="clear-btn" type="button" onClick={onClear}>
          Clear list
        </button>
      </div>
    </main>
  );
}
