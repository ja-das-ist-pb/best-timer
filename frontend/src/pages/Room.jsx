import { useRef } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import CheckRoomExistence from '../services/RoomExistenceApi'
import RoomDetail from '../services/RoomDetailApi'

export default function Room() {
    const navigate = useNavigate()

    const { roomid } = useParams()
    const { ConnectionMode } = useLocation()

    // 1. check if the room still exists
    if (!CheckRoomExistence(ConnectionMode, roomid)) {
        navigate('/')
    }

    // 2. get room detail 
    const RoomData = RoomDetail(ConnectionMode, roomid)
    
    // 3. connect ws
    

    return (
        <>
            <Outlet />
        </>
    )
}