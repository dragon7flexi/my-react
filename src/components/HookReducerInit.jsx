import { useReducer } from "react";

// It has overheads.
function initCounter(init) {
    console.log('initCounter is called');
    return {
        count: Math.floor(Math.random() * (init + 1))
    };
}

export default function HookReducerInit({ init }) {
    const [state, dispatch] = useReducer(
        initCounter(init),
    );
}