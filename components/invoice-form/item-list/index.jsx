"use client";

import { useEffect, useState } from "react";
import "./item-list.css";
import NewItemCreate from "./new-item-create";


export default function ItemList({ error, invoinceData }) {
  const [newItem, setNewItem] = useState([]);
  
  let id= 0;
  function makeId(){
    
    return id++
  }
  
  useEffect(() => {
    invoinceData?.items?.map((x) => {
      setNewItem([...newItem,  NewItemCreate({ error, invoinceData })]);
    });
  }, []);

  const deleteItem = (id) => {
    console.log(id);
    
    setNewItem(newItem.filter(x => x.id != id));
  };

  return (
    <div className="item-list">
      <h3>Öğe Listesi</h3>

      <div className="items">
        {newItem.map((x,i) => (
          <div key={i} id={makeId()} className="new-it">{x}</div>
        ))}
      </div>

      <button
        type="button"
        className="add-new-button"
        onClick={() =>
          setNewItem([...newItem, NewItemCreate({ error, invoinceData,deleteItem,id})])
        }
      >
        + Yeni Öğe Ekle
      </button>
    </div>
  );
}
