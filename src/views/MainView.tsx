import React from "react"
import { Cell } from "../components/Cell";

const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert(`click: ${e.currentTarget.innerHTML}`);
}

const cellClick = (i: number) => {
    alert("cell clicked")
}

export const MainView = () => {
    return (
        <div>
            <h1>Hello React!</h1>
            <p><button onClick={onClick}>Button test</button></p>
            <p><Cell text="X" onClick={() => cellClick(0)} /></p>
        </div>
    )
}