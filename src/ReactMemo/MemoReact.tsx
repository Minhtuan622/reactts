import React, {useCallback, useState} from 'react';
import ReactMemoChild from "./ReactMemoChild";

const Counter = ({children}: any) => {
    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count + 1)
    return (
        <>
            <h1 className="text-3xl">Count: {count}</h1>
            <div>
                <h2 className="text-2xl">Count: {count}</h2>
                <button className="bg-yellow-600 hover:bg-yellow-700 transition py-2 px-4 rounded-lg my-2" onClick={handleClick}>Click to count</button>
                {children}
            </div>
        </>
    )
}

const MemoReact = () => {

    const func = useCallback(() => console.log("render Component"), [])
    return (
        <div className="bg-slate-600 py-2 px-4 rounded-lg text-white font-semibold">
            <Counter>
                <ReactMemoChild func={func}/>
            </Counter>
        </div>
    );
};

export default MemoReact;