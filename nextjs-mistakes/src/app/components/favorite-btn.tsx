"use client";
// "use client"; // here we are using useStata means its interacting with clint so we have to use it.
// case - 1 Error:   × You're importing a component that needs `useState`. This React hook only works in a client component. To fix, mark the file (or its parent) with the `"use client"` directive.
// Case -2 this is a client comp why becouse client comp behaviour coming from the sidebar comp
import React, { useState } from 'react'
import {HeartFilledIcon, HeartIcon} from "@radix-ui/react-icons";
import { compileFunction } from 'vm'

export default function FavoriteBtn({ user }) {
console.log(user);
const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button onClick={() => setIsFavorite((prev)=> !prev)}
    className="p-2 rounded-md bg-zinc-300">
        {isFavorite? <HeartFilledIcon/> : <HeartIcon/> }
    </button>
  )
}
