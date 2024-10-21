"use client";

import { useEffect, useState } from "react";
import "./item-list.css";
import NewItemComponent from "./server-side";

export default function ItemList({ error }) {
  const [newItem, setNewItem] = useState([]);

  return (
    <div className="item-list">
      <h3>Öğe Listesi</h3>

      <div className="items">
        {newItem.map((x) => (
          <div className="new-it">{x}</div>
        ))}
      </div>

      <button
        type="button"
        className="add-new-button"
        onClick={() => setNewItem([...newItem, NewItemComponent({ error })])}
      >
        + Yeni Öğe Ekle
      </button>
    </div>
  );
}
