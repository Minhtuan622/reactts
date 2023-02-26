import React from 'react';
import Cell from "./Cell";

const Table = ({cell, onClick}: any) => {
    return (
        <div className="grid grid-cols-3  grid-rows-3 gap-8  w-[500px] h-[500px]">
            {cell.map((item: string, index: number) => (
                <Cell key={index} onClick={() => onClick(index)} value={item} className={item  === "X" ? "text-red-600" : "text-blue-500"}/>
            ))}
        </div>
    );
};

export default Table;