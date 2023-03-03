import React, {useReducer, useState} from 'react';

function reducer(state: number, action: string) {
    switch (action) {
        case "+1": return state + 1
        case "-1": return state - 1
        case "set_0": return 0
        default: return state
    }
}

function valueReducer(state: string, action: any) {
    switch (action.type) {
        case 'setvalue': return action.value
        default: return state
    }
}

const initialValue = {
    loading: false,
    userData: [],
    error: null
}

function userReducer(state: any, action: any) {
    switch (action.type) {
        case 'req':
            return {
                ...state,
                loading: true
            }
        case 'suc':
            return {
                ...state,
                loading: false,
                userData: action
            }
        case 'err':
            return {
                ...state,
                userData: [],
                error: action
            }
        default: return state
    }
}

const Reducer = () => {
    const [count, dispatch] = useReducer(reducer, 0)
    const [setinputValue, dispatch2] = useReducer(valueReducer, '')
    const [inputvalue, setValue] = useState('')
    const [user, userDispatch] = useReducer(userReducer, initialValue)

    function handleClick() {
        userDispatch({type: 'req'})
        setTimeout(() => {
            fetch('https://reqres.in/api/users')
                .then(res => res.json())
                .then(res => {
                    userDispatch({
                        type: 'suc',
                        userData: res
                    })
                })
                .catch(err => {
                    userDispatch({
                        type: 'err',
                        userData: err
                    })
                })
        }, 3000)
    }

    return (
        <div className="bg-slate-600 py-3 px-6 text-white rounded-2xl mx-10">
            <h1 className="text-center mb-5">Count: {count}</h1>
            <div className="flex justify-center">
                <button className="bg-amber-500 hover:bg-amber-600 transition px-4 py-2 rounded-lg mx-5 min-w-[70px]" onClick={() => dispatch('+1')}>+1</button>
                <button className="bg-amber-500 hover:bg-amber-600 transition px-4 py-2 rounded-lg mx-5 min-w-[70px]" onClick={() => dispatch('-1')}>-1</button>
                <button className="bg-amber-500 hover:bg-amber-600 transition px-4 py-2 rounded-lg mx-5 min-w-[70px]" onClick={() => dispatch('set_0')}>Set 0</button>
            </div>
            <div className="mx-8 mt-8 text-center">
                <input type="text" onChange={(event) => {setValue(event.target.value)}} className="outline-none border-none py-2 px-4 rounded-lg mx-8 mb-5 text-black"/>
                <button className="bg-amber-500 hover:bg-amber-600 transition py-2 px-4 rounded-lg" onClick={() => dispatch2({
                    type: "setvalue",
                    value: inputvalue
                })}>Set input value</button>
                <h1>Input Value: {inputvalue}</h1>
                <h1>Set input value: {setinputValue}</h1>
            </div>
            <div className="flex justify-center items-center mt-8">
                <button className="bg-amber-500 hover:bg-amber-600 transition px-4 py-2 rounded-lg mx-5 min-w-[70px]" onClick={handleClick}>Get data user</button>
                {user.loading ? <p>Loading...</p> :<p>{JSON.stringify(user)}</p>}
            </div>
        </div>
    );
};

export default Reducer;