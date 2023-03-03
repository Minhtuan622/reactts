import React, {useCallback, useEffect, useState} from 'react';
import CallbackChild from "./CallbackChild";

const Callback = () => {
    const [user, setUser] = useState([])
    const getData = useCallback((value: string) => fetch(`https://reqres.in/api/${value}`), [])
    const handleClick = () => {
        getData('users')
            .then(res => res.json())
            .then(res => {
                const user = res.data
                setUser(user)
            })
    }
    return (
        <div className="bg-slate-600 px-6 py-3 rounded-2xl text-white font-semibold text-2xl w-[90vmin] break-words">
            <button className="bg-amber-500 hover:bg-amber-600 transition py-2 px-4 rounded-lg" onClick={handleClick}>Get User</button>
            <p>{JSON.stringify(user)}</p>
            <CallbackChild getData={getData}/>
        </div>
    );
};

export default Callback;