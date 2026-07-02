import APIURL from "./ApiURL"

export default async function RoomDetail(ConnectionMode, roomid) {
    const response = await fetch(`${APIURL.ConnectionMode}/RoomDetail`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            RoomId: roomid
        })
    })

    const data = await response.json()

    return data
}