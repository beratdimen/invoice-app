"use client"

import { DeleteIcon } from "@/helpers/icons";

export default function DeleteButton(e) {
    function handleClick() {
        console.log(e);
    }

    return (
        <button className="delete-button" onClick={handleClick(e)}>
            <DeleteIcon />
        </button>
    )
}