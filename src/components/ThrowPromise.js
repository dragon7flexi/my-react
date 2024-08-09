let flg = false;

export default function ThrowPromise() {
    if (flg) {
        return <p>正しく表示できました。</p>;
    }

    throw new Promise((resolve, reject) => {
        setTimeout(() => {
            flg = true;
            resolve('Success!');
        }, 3000);
    });
}