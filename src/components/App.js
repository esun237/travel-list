import { useState } from "react";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "toiletry", quantity: 1, packed: false },
];

export default function App() {
  const [list, setList] = useState(initialItems);
  function handleAddList(newItem) {
    setList((list) => [...list, newItem]);
  }
  function handleDeleteItem(itemID) {
    setList((list) => list.filter((item) => item.id !== itemID));
  }
  function handleToggleItem(itemID) {
    setList((list) =>
      list.map((item) =>
        item.id === itemID ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setList([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddList={handleAddList} />
      <PackingList
        list={list}
        onClearList={handleClearList}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats list={list} />
    </div>
  );
}
