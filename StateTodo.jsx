import { useState } from "react";

let maxId = 0;
export default function StateTodo() {
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState([]);

    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    const handleDone = e => {
        setTodo(todo.map(item => {
            if (item.id === Number(e.target.dataset.id)) {
                return {
                    ...item,
                    isdone: true
                };
            } else {
                return item;
            }
        }));
    };

    const handleClick = e => {
        setTitle([
            ...todo,
            {
                id: ++maxId,
                title,
                created: new Data(),
                isDone: false
            }
        ]);
    };

    const handleRemove = e => {
        setTodo(todo.filter(item => {
            item.id !== Number(e.target.dataset.id)
        }));
    }
};

return (
    <div>
        <label>
            やること:
            <input 
                type="text"
                name="title"
                value={title}
                onChange={handleChangeTitle}
            />
        </label>
        <button type="button" onClick={handleClick} data-id={item.id}></button>
        <hr />
        <ul>
            { todo.map(item => (
                <li 
                    key={item.id}
                    className={item.isDone ? 'done' : ''}
                >
                    {item.title}
                    <button type="button" onClick={}></button>
                </li>
            ))}
        </ul>
    </div>
    );