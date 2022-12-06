import { useState, useEffect } from 'react'
import snowman from '../../../../public/snowman.svg'
import classes from './snowman.module.scss'

const Snowman = () => {

    const [show, setShow] = useState(true)

    useEffect(() => {
     setTimeout(() => {
        setShow(false)
     }, 10000)   
    })

    return (
        <div className={ show ? classes.snowman_wrapper : `${classes.snowman_wrapper} ${classes.hidden}`}>
            <img src={snowman} onClick={() => setShow(false)} />
        </div>
    )
}

export { Snowman }