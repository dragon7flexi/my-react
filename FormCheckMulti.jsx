import { useState } from "react";

export default function FormCheckMulti() {
    const [form, setForm] = useState({
        animal: ['dog', 'hamster']
    });

    const handleFormMulti = e => {
        const fa = form.animal;

        if (e.target.checked) {
            fa.push(e.target.value);
        } else {
            fa.splice(fa.indexOf(e.target.value), 1);
        }

        setForm({
            ...form,
            [e.target.name]: fa
        });
    };

    const show = () => {
        console.log(`好きな動物:${form.animal}`);
    };

    return (
        <form>
            <fieldset>
                <legend>好きな食べ物:</legend>
                <label htmlFor="animal_dog">イヌ</label>
                <input 
                    id="animal_dog"
                    name="animal"
                    type="checkbox" 
                    value="dog"
                    checked={form.animal.includes('dog')}
                    onChange={handleFormMulti}
                /><br/>
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}