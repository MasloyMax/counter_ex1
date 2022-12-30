import CounterStyle from './counter.module.css'
import Button from "./Button";
import {numberMax, numberMin} from "../App";
import {FC} from "react";

type PropsType = {
    number: number
    addNumber: (num: number) => void
    resetNum: () => void
}

const Counter: FC<PropsType> = (
    {
        number,
        addNumber,
        resetNum
    }: PropsType
) => {

    const onClickReset = () => {
        resetNum()
    }

    const onClickAddHandler = () => {
        addNumber(number)
    }

    const CountClassAdd = number === numberMax ? CounterStyle.button + ' '
        + CounterStyle.button_disabled
        : CounterStyle.button
    const CountClassReset = number === numberMin ? CounterStyle.button + ' '
        + CounterStyle.button_disabled
        : CounterStyle.button
    const disableButtonAdd = number === numberMax ? true : false
    const disableButtonReset = number === numberMin ? true : false

    return (
        <div className={CounterStyle.container}>
            <div>
                <p>Counter</p>
            </div>
            <div className={number !== numberMax ? CounterStyle.container_number : CounterStyle.container_number_reset}>
                <p className={CounterStyle.number}>{number}</p>
            </div>
            <div>
                <Button name={"Add"}
                        callBack={onClickAddHandler}
                        class={CountClassAdd}
                        disableButton={disableButtonAdd}/>
                <Button name={"Reset"}
                        callBack={onClickReset}
                        class={CountClassReset}
                        disableButton={disableButtonReset}/>
            </div>
        </div>
    )
}

export default Counter