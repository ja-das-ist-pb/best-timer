import APIURL from "./ApiURL"

export default async function CheckRoomExistence(ConnectionMode, roomid) {
    const response = await fetch(`${APIURL.ConnectionMode}/CheckRoomExistence`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            RoomId: roomid
        })
    })

    const data = await response.json().Exixtence
    return data
}