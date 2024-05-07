import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  list,
  onClearList,
  onDeleteItem,
  onToggleItem,
}) {
  const [sortBy, setSortBy] = useState("description");
  let listSorted;
  if (sortBy === "input") listSorted = list;
  if (sortBy === "description")
    listSorted = list
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed") {
    listSorted = list
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {listSorted.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="sort-container">
        <span>Sort By</span>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Input</option>
          <option value="description">Description</option>
          <option value="packed">Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
