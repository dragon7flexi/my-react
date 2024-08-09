import { useRef, useState } from "react";

// id is retained by component is aborted.
export default function HookRef() {
    const id = useRef(null);
    const [count, setCount] = useState(0);

    const handlestart = () => {
        if (id.current === null) {
            id.current = setInterval(() => setCount(c => c + 1), 1000);
        }
    };

    const handleEnd = () => {
        clearInterval(id.current);
        id.current = null;
    }
}