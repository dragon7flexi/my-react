import { useState } from "react";

export default function FormRadio() {
    const [form, setForm] = useState({
        os: 'windows'
    });

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const show = () => {
        console.log(`使用OS:${form.os}`);
    };

    return (
        <form>
            <fieldset>
                <legend>使用OS:</legend>
                <label htmlFor="os_win">Windows</label>
                <input id="os_win" name="os" type="radio"
                    value="windows" checked={form.os === 'windows'}
                    onChange={handleForm} /><br/>
                <label htmlFor="os_mac">maxOS</label>
                <input 
                    id="os_max"
                    name="os"
                    type="radio"
                    value="mac"
                    checked={form.os === 'max'}
                    onChange={handleForm}
                 />
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}