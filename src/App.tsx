import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Settings} from "./components/Settings";
import Counter from "./components/Counter";
import CounterStyle from "./components/counter.module.css";

function App() {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [number, setNumber] = useState<number>(minValue)
    const [error, setError] = useState<string>('')
    const [blur, setBlur] = useState<boolean>(false)

    useEffect(() => {
        let minValue = localStorage.getItem('settingsUpdateMin')
        let maxValue = localStorage.getItem('settingsUpdateMax')
        if (minValue && maxValue) {
            setMinValue(JSON.parse(minValue))
            setMaxValue(JSON.parse(maxValue))
            setNumber(JSON.parse(minValue))
        }
    }, [])


    useEffect(() => {
        if (minValue > maxValue) {
            setError("Incorrect value")
        }
    }, [minValue, maxValue])

    const setInputNumber = () => {
        if (minValue < maxValue) {
            localStorage.setItem('settingsUpdateMin', JSON.stringify(minValue))
            localStorage.setItem('settingsUpdateMax', JSON.stringify(maxValue))
            setNumber(minValue)
        }
    }

    const addNumber = () => {
        if (number !== maxValue) {
            setNumber(number + 1)
        }
    }

    const onBlur = () => {
        setBlur(false)
    }

    const onFocus = () => {
      setBlur(true)
    }

    const resetNum = () => minValue < maxValue && setNumber(minValue)

    const CountClassAdd = number === maxValue && minValue > maxValue ? CounterStyle.button + ' '
        + CounterStyle.button_disabled
        : CounterStyle.button
    const CountClassReset = number === minValue ?
        CounterStyle.button_disabled : CounterStyle.button
    const buttonSet = minValue < maxValue ? CounterStyle.button : CounterStyle.button_disabled
    const disableButtonAdd = number === maxValue || minValue >= maxValue ? true : false
    const disableButtonReset = number === minValue || minValue >= maxValue ? true : false

    const errorInputMinvalueClass = minValue >= maxValue ? 'input_error' : ''

    return (
        <div className="App">

            <div className={'container_two'}>
                <Settings setMinValue={setMinValue}
                          setMaxValue={setMaxValue}
                          minValue={minValue}
                          maxValue={maxValue}
                          setInputNumber={setInputNumber}
                          errorInputMinvalueClass={errorInputMinvalueClass}
                          buttonSet={buttonSet}
                          onBlur={onBlur}
                          onFocus={onFocus}

                />
            </div>
            <div className={'container_one'}>
                <Counter number={number}
                         addNumber={addNumber}
                         resetNum={resetNum}
                         minValue={minValue}
                         maxValue={maxValue}
                         CountClassAdd={CountClassAdd}
                         CountClassReset={CountClassReset}
                         disableButtonAdd={disableButtonAdd}
                         disableButtonReset={disableButtonReset}
                         error={error}
                         blur={blur}/>
            </div>
        </div>
    );
}

export default App;
