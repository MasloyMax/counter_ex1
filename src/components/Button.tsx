import CounterStyle from './counter.module.css'

type PropsType = {
    name: string
    callBack: () => void
    class?: string
    disableButton?: boolean
}

export const Button = (props: PropsType) => {
    const {name, callBack, disableButton} = props

    return (
        <button className={props.class}
                onClick={()=>callBack()}
                disabled={disableButton}>{name}</button>
    )
}