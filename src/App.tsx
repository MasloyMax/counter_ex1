import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";

export const numberMax = 5
export const numberMin = 0

function App() {

    const [number, setNumber] = useState<number>(numberMin)

    const addNumber = () => number !== numberMax && setNumber(number + 1)

    const resetNum = () => setNumber(numberMin)

    return (
        <div className="App">
            <Counter number={number}
                     addNumber={addNumber}
                     resetNum={resetNum}/>
        </div>
    );
}

export default App;
