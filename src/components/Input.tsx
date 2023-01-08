import {ChangeEvent,FocusEvent} from "react";

type PropsType = {
    clas?: string
    value: number
    callBack: (value:number| string) => void
    onBlur: () => void
    onFocus: () => void
}

export const Input = (props: PropsType) => {

    const {clas, value, callBack,onBlur,onFocus} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(e.currentTarget.value)
    }

    return (
        <input className={clas}
               value={value}
               type={'number'}
               onChange={onChangeHandler}
               onBlur={()=>{onBlur()}}
               onFocus={()=>{onFocus()}}
       />
    )
}