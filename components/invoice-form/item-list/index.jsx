"use client";

import { useEffect, useState } from "react";
import "./item-list.css";
import NewItemCreate from "./new-item-create";


export default function ItemList({ error, invoinceData }) {
  const [newItem, setNewItem] = useState([]);

  
  useEffect(() => {
    invoinceData?.items?.map((x) => {
      setNewItem([...newItem, NewItemCreate({ error, invoinceData })]);
    });
  }, []);

  return (
    <div className="item-list">
      <h3>Öğe Listesi</h3>

      <div className="items">
        {newItem.map((x) => (
          <div datasetId={makeId()} className="new-it">{x}</div>
        ))}
      </div>

      <button
        type="button"
        className="add-new-button"
        onClick={() =>
          setNewItem([...newItem, NewItemCreate({ error, invoinceData })])
        }
      >
        + Yeni Öğe Ekle
      </button>
    </div>
  );
}
