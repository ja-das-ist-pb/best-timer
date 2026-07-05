import { useRef, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import CheckRoomExistence from '../services/RoomExistenceApi'
import RoomDetail from '../services/RoomDetailApi'
import WSManager from '../models/WebSocketManager'
import WSURL from '../services/WSURL'
import Player from '../models/Player'

export default function Room() {
    const navigate = useNavigate()

    const { roomid } = useParams()
    const { ConnectionMode, PlayerDetail } = useLocation()

    // 1. check if the room still exists
    if (!CheckRoomExistence(ConnectionMode, roomid)) {
        navigate('/')
    }

    // 2. get room detail 
    const RoomData = RoomDetail(ConnectionMode, roomid)
    
    // 3. connect ws
    const ws = useRef(null)

    useEffect(() => {
        ws.current = new WSManager(`${WSURL.ConnectionMode}/room/${roomid}`)

        return () => {
            ws.current.close()
        }
    }, [])
    
    
    // 4. init the player
    ws.current.send({
        type: "initPlayer",
        content: PlayerDetail
    })

    return (
        <>
            <Outlet />
        </>
    )
}