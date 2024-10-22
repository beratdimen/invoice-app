"use client";

import { useState } from "react";
import "./item-list.css";
import NewItemCreate from "./new-item-create";

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

      <button type="button" className="add-new-button" onClick={() => setNewItem([...newItem, NewItemCreate({ error })])}>
        + Yeni Öğe Ekle
      </button>
    </div>
  );
}
