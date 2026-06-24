import { useNavigate } from "react-router-dom"

export default function JionRoom() {
    const navigate = useNavigate()

    return (
        <>
            <input placeholder="Room Code"/>
            <input placeholder="Nickname"/>
            <button type="submit" onClick={() => navigate("/lobby")}>Join Room</button>
        </>
    )
}