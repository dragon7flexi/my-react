import { useRecoilState } from "recoil";

export default function RecoilCounter() {
    const [counter, setCounter] = useRecoilState(counterAtom);

    const handleClick = () => {
        setCounter(c => c + 1);
    };

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{counter}回、クリックされました。</p>
        </>
    );
}