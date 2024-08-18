import React from "react"

const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert(`click: ${e.currentTarget.innerHTML}`);
}

export const MainView = () => {
    return (
        <div>
            <h1>Hello React!</h1>
            <button onClick={onClick}>Button test</button>
        </div>
    )
}