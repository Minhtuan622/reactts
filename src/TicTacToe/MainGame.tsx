import React, {useState} from 'react';
import Table from "./Table";
import {GameWinner} from "./GameWinner";

const MainGame = () => {
    const [state, setState] = useState({
        board: Array(9).fill(null),
        nextX: true
    })
    const isWinner = GameWinner(state.board)
    const handleTable = (index: number): void => {
        const player = [...state.board]
        if (isWinner || player[index]) return
        player[index] = state.nextX ? "X" : "O"
        setState({
            ...state,
            board: player,
            nextX: !state.nextX
        })
    }
    const handleReset = () => {
        setState({
            ...state,
            board: Array(9).fill(null)
        })
    }
    console.log(isWinner)
    return (
        <div>
            <Table cell={state.board} onClick={handleTable}></Table>
            <button className=" bg-amber-500 hover:bg-amber-600 font-semibold transition-colors rounded py-1 px-3 w-full my-10" onClick={handleReset}>Play Again</button>
            {isWinner && <p className="text-white text-4xl text-center font-semibold text-red-600">The winner is {isWinner}</p>}
        </div>
    );
};

export default MainGame;