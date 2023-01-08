import {Button} from "./Button";
import {ChangeEvent, useState} from "react";
import StyleSettings from './settings.module.css'
import {Input} from "./Input";

type PropsType = {
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    minValue: number
    maxValue: number
    setInputNumber: () => void
    errorInputMinvalueClass: string
    buttonSet: string
    onBlur: () => void
    onFocus: () => void
}

export const Settings = (props: PropsType) => {

    const {
        setMinValue,
        setMaxValue,
        minValue,
        maxValue,
        setInputNumber,
        errorInputMinvalueClass,
        buttonSet,
        onBlur,
        onFocus,
    } = props

    const onChangeInputHandlerMin = (value: number | string) => {
        setMinValue(+value)
    }

    const onChangeInputHandlerMax = (value: number | string) => {
        setMaxValue(Number(value))
    }

    const onClickSetHandler = () => {
        setInputNumber()
    }

    return (
        <div className={StyleSettings.container_settings}>
            <div className={StyleSettings.input}>
                Start Value: <Input clas={errorInputMinvalueClass}
                                    value={minValue}
                                    callBack={onChangeInputHandlerMin}
                                    onBlur={onBlur}
                                    onFocus={onFocus}/>
            </div>
            <div className={StyleSettings.input}>
                Max Value: <Input clas={errorInputMinvalueClass}
                                  value={maxValue}
                                  callBack={onChangeInputHandlerMax}
                                  onBlur={onBlur}
                                  onFocus={onFocus}
            />
            </div>

            <div>
                <Button class={buttonSet} name={'set'} callBack={onClickSetHandler}/>
            </div>
        </div>
    )
}