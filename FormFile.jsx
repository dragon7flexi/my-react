import { useRef } from "react";

export default function FormFile() {
    const file = useRef(null);

    function show() {
        const fs = file.current.files;

        for (const f of fs) {
            console.log(f.name);
            console.log(f.type);
            console.log(Math.trunc(f.size / 1024));
        }
    }

    return (
        <form>
            <input type="file" ref={file} multiple />
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}