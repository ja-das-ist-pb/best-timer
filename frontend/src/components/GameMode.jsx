

export function GameMode({ fold, type, onClick}) {
    if (fold) {
        return (
            <div onClick={onClick}>
                {type === 'local' && 'LOCAL Mode'}
                {type === 'lan' && 'LAN Mode'}
                {type === 'wifi' && 'Wifi Mode'}
            </div>
        )
    }

    return (
        <div onClick={onClick}>
            {type === 'local' && (
                <>
                    <div>SINGLE</div>
                    <div>MULTI</div>
                </>)}
            {type === 'lan' && (
                <>
                    <div>CREATE</div>
                    <div>JOIN</div>
                </>)}
            {type === 'wifi' && (
                <>
                    <div>CREATE</div>
                    <div>JOIN</div>
                </>)}
        </div>
    )

}
