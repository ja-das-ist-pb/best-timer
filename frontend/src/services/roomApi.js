import APIURL from "./ApiURL"

export async function Create(GameSetting, HostName, ConnectionMode) {
    const response = await fetch(`${APIURL.ConnectionMode}/roomdata`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            GameSetting: GameSetting,
            HostName: HostName,
            ConnectionMode: ConnectionMode
        })
    })

    const data = await response.json()
    return data
}