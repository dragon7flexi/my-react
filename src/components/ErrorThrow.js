export default function ErrorRoot() {
    throw new Error('Error is occured in MyApp.');
    // raises an unconditional exception
    return (
        <p>正しく実行されました。</p>
    );
}