import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <>
        <div>
            <p>You have been clicked {counter} times.</p>
            <button onClick={() => setCounter(counter + 1)}>Click me</button>
        </div>
        </>
    );
}

export default Counter;
