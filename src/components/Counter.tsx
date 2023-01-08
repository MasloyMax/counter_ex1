import CounterStyle from './counter.module.css'
import {Button} from "./Button";
import {FC} from "react";

type PropsType = {
    number: number
    addNumber: () => void
    resetNum: () => void
    minValue: number
    maxValue: number
    CountClassAdd: string
    CountClassReset: string
    disableButtonAdd: boolean
    disableButtonReset: boolean
    error: string
    blur: boolean
}

const Counter: FC<PropsType> = (
    {
        number,
        addNumber,
        resetNum,
        minValue,
        maxValue,
        CountClassAdd,
        CountClassReset,
        disableButtonAdd,
        disableButtonReset,
        error,
        blur
    }: PropsType
) => {
    console.log(blur)
    return (
        <div className={CounterStyle.container}>
            <div>
                <p>Counter</p>
            </div>
            {minValue > maxValue
                ? <div
                    className={number !== maxValue ? CounterStyle.container_number : CounterStyle.container_number_reset}>
                    <div className={CounterStyle.incorrect}><p>{error}</p></div>
                </div>
                : blur ? <div className={CounterStyle.container_number}>enter values and press 'SET'
                    </div> :
                    <div
                        className={number !== maxValue ? CounterStyle.container_number : CounterStyle.container_number_reset}>
                        <p className={CounterStyle.number}>
                            {number}
                        </p>
                    </div>}
            <div>
                <Button name={"Add"}
                        callBack={addNumber}
                        class={CountClassAdd}
                        disableButton={disableButtonAdd}/>
                <Button name={"Reset"}
                        callBack={resetNum}
                        class={CountClassReset}
                        disableButton={disableButtonReset}/>
            </div>
        </div>
    )
}

export default Counter