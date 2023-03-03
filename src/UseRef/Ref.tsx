import React, {useEffect, useRef, useState} from 'react';

const Ref = () => {
    const ref = useRef(null)
    console.log({ref})
    useEffect(() => {
        // @ts-ignore
        ref.current.focus()
    }, [])
    return (
        <div className="flex justify-center items-center text-white bg-slate-600 py-3 px-6 rounded-2xl">
            <input type="text" ref={ref} className="outline-none border-none py-2 px-4 rounded-lg mr-8 text-black"/>
            <button className="bg-amber-500 text-white py-2 px-4 rounded-lg">Click to count</button>
        </div>
    );
};

export default Ref;