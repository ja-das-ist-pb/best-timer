import { useState } from 'react'
import PlayerCard from '../components/PlayerCard'
import Player from '../models/Player'

export default function Lobby() {
    const [players, setplayers] = useState([])
    // make sure players' type is Player

    return (
        <>
            <p id="roomid"></p>
            <p id="waitanime"></p>
            <p id="showplayercount"></p>
            {players.map((player) => (
                <PlayerCard 
                    key = {player.id}
                    PlayerDetail = {player}
                />
            ))}

            <button id="readybtn">READY</button>
        </>
    )
}