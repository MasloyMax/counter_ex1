import CounterStyle from './counter.module.css'

type PropsType = {
    name: string
    callBack: () => void
    class?: string
    disableButton?: boolean
}

const Button = (props: PropsType) => {
    const {name, callBack, disableButton} = props

    return (
        <button className={props.class}
                onClick={()=>callBack()}
                disabled={disableButton}>{name}</button>
    )
}

export default Button