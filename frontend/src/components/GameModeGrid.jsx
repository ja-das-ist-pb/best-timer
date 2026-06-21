import { useState } from "react"
import { GameMode } from "./GameMode.jsx"


export function GameModeGrid() {    
    const [GameModes, setGameModes] = useState([
        {id:'local', fold:true, type:'local'},
        {id:'lan', fold:true, type:'lan'},
        {id:'wifi', fold:true, type:'wifi'}
    ])

    const handleSep = (id) => {
        setGameModes((prev) => 
            prev.map((gm) => 
                (gm.id === id) 
                    ? {...gm, fold:!gm.fold}
                    : gm
            )
        )
    }

    return (
        <>
            {GameModes.map((gm) => (
                <GameMode 
                    key={gm.id} 
                    onClick={() => handleSep(gm.id)}
                    fold={gm.fold}
                    type={gm.type}
                />
            ))}
        </>
    )
}