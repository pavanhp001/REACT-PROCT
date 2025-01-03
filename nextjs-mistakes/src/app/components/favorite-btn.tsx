"use client"; // here we are using useStata means its interacting with clint so we have to use it.
import React, { useState } from 'react'
import {HeartFilledIcon, HeartIcon} from "@radix-ui/react-icons";

export default function FavoriteBtn() {
const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button onClick={() => setIsFavorite((prev)=> !prev)}
    className="p-2 rounded-md bg-zinc-300">
        {isFavorite? <HeartFilledIcon/> : <HeartIcon/> }
    </button>
  )
}
