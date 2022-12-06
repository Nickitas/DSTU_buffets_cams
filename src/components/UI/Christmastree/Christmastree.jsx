import { useState } from 'react'
import christmastree from '../../../../public/christmastree.svg'
import classes from './christmastree.module.scss'

const Christmastree = () => {

    const [show, setShow] = useState(true)

    return (
        <div className={show ? classes.christmastree_wrapper : `${classes.christmastree_wrapper} ${classes.hidden}`}>
            <img src={christmastree} onClick={() => setShow(false)} />
        </div>
    )
}

export { Christmastree }