import { useState } from "react";

// This way is more recommended.
export default function HookCallBackRef() {
    const [show, setShow] = useState(false);
    const handleClick = setShow(!show);

    const callbackRef = elem => elem?.focus();

    return (
        <>
            {show &&
                <div>
                    <label htmlFor="address">住所:</label>
                    <input id="address" type="text" ref={callbackRef} />
                </div>
            }
        </>
    );
}