import React, {useEffect, useState} from 'react';

const Effect = () => {
    const tabs = ['todos', 'comments', 'posts']
    const [value, setValue] = useState('')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${value}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [value])
    return (
        <div className="bg-slate-600 py-3 px-6 rounded-2xl shadow-2xl">
            <div className="flex justify-between">
                {tabs.map(tab => (
                    <button className={`bg-amber-500 hover:bg-amber-600 transition py-2 px-4 font-semibold rounded-xl mx-2`} key={tab} onClick={() => setValue(tab)}>{tab}</button>
                ))}
            </div>
        </div>
    );
};

export default Effect;