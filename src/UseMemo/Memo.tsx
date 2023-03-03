import React, {useMemo, useState} from 'react';

const Memo = () => {
    const arr = ['posts', 'todos', 'comments']
    const [value, setValue] = useState('')
    useMemo(() => {
        fetch(`https://jsonplaceholder.typicode.com/${value}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [value])
    return (
        <div className="bg-slate-600 py-3 px-6 rounded-2xl">
            {arr.map(item => (
                <button className="bg-amber-500 hover:bg-amber-600 transition py-2 px-4 rounded-lg mx-2"
                        onClick={() => setValue(item)}
                        key={item}>{item}
                </button>
            ))}
        </div>
    );
};

export default Memo;