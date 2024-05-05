import "./index.css";
import { useState } from "react";

import { Item, SortBy } from "./types";

import { Logo } from "./components/logo";
import { Stats } from "./components/stats";
import { Form } from "./components/form";
import { PackingList } from "./components/packing-list";

// Let's pretend that "name" is unique, since we have no way of getting a proper unique ID for now
export function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>("input");

  const packedItemsCount = items.filter((item) => item.packed).length;

  function handleItemAdd(item: Item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleItemToggle(name: string) {
    setItems(
      items.map((item) =>
        name === item.name ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleSort(sort: SortBy) {
    setSortBy(sort);
  }

  function handleClear() {
    setItems([]);
  }

  function handleItemDelete(name: string) {
    setItems(items.filter((item) => item.name !== name));
  }

  let sortedItems: Item[] = [];

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "name") {
    sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "packed") {
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed),
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onItemAdded={handleItemAdd} />
      <PackingList
        items={sortedItems}
        onItemToggled={handleItemToggle}
        onItemDeleted={handleItemDelete}
        onSort={handleSort}
        onClear={handleClear}
      />
      <Stats itemsCount={items.length} packedItemsCount={packedItemsCount} />
    </div>
  );
}
