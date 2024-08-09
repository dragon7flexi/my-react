import { useEffect, useState } from "react";

const sleep = delay => {
    const start = Date.now();
    while (true) {
        if (Date.now() - start > delay) {
            break;
        }
    }
};

export default function HookEffect({ init }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        sleep(2000);
        setCount(init);
    }, []);
}