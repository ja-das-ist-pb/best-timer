import Create from "../services/roomApi"

export default class Room {
    constructor(PlayerCount, GameMode, MaxPoint, HostName, ConnectionMode) {
        const GameSettingObj = {
            PlayerCount : PlayerCount,
            GameMode : GameMode,
            MaxPoint : MaxPoint
        }
        this.GameSetting = GameSettingObj
        this.HostName = HostName
        this.ConnectionMode = ConnectionMode
    }

    ApplyToCreateRoom() {
        return Create(this.GameSetting, this.HostName, this.ConnectionMode)
    }
}