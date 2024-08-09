import wrapPromise from "./wrapPromise";

// get the object administering a state of Promise
const info = getInfo();

export default function ThrowResult() {
    const result = info.get();
    return <p>{result}</p>
}

function getInfo() {
    return wrapPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Succeeded!!');
            } else {
                reject('Error');
            }
        }, 2000);
    } ));
}