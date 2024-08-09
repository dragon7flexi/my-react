import { HdOutlined } from "@mui/icons-material";
import { useReducer } from "react";

export default function HookReducerUp({ init }) {
    cosnt [state, dispatch] = useReducer(
        (state, actino) => {
            switch (actino.type) {
                case 'update':
                    return {
                        count: state.count + state.step
                    };
                case 'reset':
                    return {
                        count: actino.init
                    };
                default:
                    return state;
            }
        },
        {
            count: init
        }
    );

    const handleUp = () => dispatch({ type: 'update', step: 1});
    const handleDown = () => dispatch({ type: 'update', step: -1});
    const handleReset = () => dispatch({ type: 'reset', init: 0});

    return (
        <>
            <button onClick={handleUp}>カウントアップ</button>
            <button onClick={handleDown}>カウントダウン</button>
            <button onClick={handleReset}>リセット</button>
            <p>{state.count}回、クリックされました。</p>
        </>
    );
}