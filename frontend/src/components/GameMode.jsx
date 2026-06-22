import { useNavigate } from "react-router-dom"

export default function GameMode({ fold, type, onClick}) {
    const navigate = useNavigate() 


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
                    <div onClick={() => navigate('/createroom')}>CREATE</div>
                    <div onClick={() => navigate('/joinroom')}>JOIN</div>
                </>)}
            {type === 'wifi' && (
                <>
                    <div onClick={() => navigate('/createroom')}>CREATE</div>
                    <div onClick={() => navigate('/joinroom')}>JOIN</div>
                </>)}
        </div>
    )

}
