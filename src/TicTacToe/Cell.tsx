import React from 'react';

const Cell = ({onClick, value, className}: any) => {
    return (
        <div className={`text-white shadow-xl bg-slate-600 rounded-2xl flex justify-center items-center text-6xl font-semibold cursor-pointer ${className}`} onClick={onClick}>{value}</div>
    );
};

export default Cell;