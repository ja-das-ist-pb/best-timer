import { Routes, Route } from 'react-router-dom' 

import Home from './pages/home.jsx'
import CreateRoom from './pages/createroom.jsx'
import JionRoom from './pages/joinroom.jsx'
import Lobby from './pages/lobby.jsx'
import Room from './pages/Room.jsx'
import Game from './pages/game.jsx'
import Result from './pages/result.jsx'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/createroom" element={<CreateRoom />} />
            <Route path="/joinroom" element={<JionRoom />} />
            <Route path="/room/:roomid" element={<Room />}>
                <Route index element={<Navigate to="lobby" replace />} />

                <Route path="lobby" element={<Lobby />} />
                <Route path="game" element={<Game />} />
                <Route path="result" element={<Result />} />
            </Route>
        </Routes>
    )
}