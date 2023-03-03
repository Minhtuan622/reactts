import React, {useEffect, useState} from 'react';

const CallbackChild = ({getData}: any) => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData('comments')
            .then((res: any) => res.json())
            .then((res: any) => {
                const comment = res.data
                setData(comment)
            })
        console.log(data)
    }, [getData])
    return (
        <div className="bg-slate-600 px-6 py-3 rounded-2xl text-white font-semibold text-2xl">
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default CallbackChild;