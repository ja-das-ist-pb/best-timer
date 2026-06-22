import { Routes, Route } from 'react-router-dom' 

import Home from './pages/home.jsx'
import CreateRoom from './pages/createroom.jsx'
import JionRoom from './pages/joinroom.jsx'
import Lobby from './pages/lobby.jsx'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/createroom" element={<CreateRoom />} />
            <Route path="/joinroom" element={<JionRoom />} />
            <Route path="/lobby" element={<Lobby />} />
        </Routes>
    )
}