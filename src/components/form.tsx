import React, { useState } from "react";
import { Item } from "../types";

interface FormProps {
  onItemAdded: (item: Item) => void;
}

export function Form({ onItemAdded }: FormProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onItemAdded({
      name,
      quantity,
      packed: false,
    });

    setName("");
  }

  function handleQuantityChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const quantityNumber = +e.target.value;

    if (quantityNumber < 1) {
      setQuantity(1);

      return;
    }

    setQuantity(quantityNumber);
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        className="quantity-select"
        name="quantity"
        onChange={handleQuantityChange}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          return (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          );
        })}
      </select>
      <input
        className="item-input"
        type="text"
        placeholder="Item..."
        value={name}
        onChange={handleNameChange}
      />
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
}
