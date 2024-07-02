export default function EventBasic({ type }) {
    const current = () => {
        const d = new Date();

        switch (type) {
            case 'data':
                console.log(d.toLocaleDatestring());
                break;
            case 'time':
                console.log(d.toLocaleTimeString());
                break;
            default:
                console.log(d.toLocaleString());
                break;
        }
    };

    return (
        <div>
            <button onClick={current}>現在時刻を取得</button>
        </div>
    )
}