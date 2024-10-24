"use client"

import { DeleteIcon } from "@/helpers/icons";

export default function DeleteButton({deleteItem,id}) {
    
    function handleClick(id){  
        deleteItem(id);
    }
    return (
        <button type="button"  className="delete-button" onClick={()=> handleClick(id)}>
            <DeleteIcon />
        </button>
    )
}