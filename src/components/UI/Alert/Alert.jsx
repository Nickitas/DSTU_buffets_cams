import { useEffect } from 'react'
import { LightningIcon, CloseIcon } from '../../svg.module'
import classes from './alert.module.scss'


const Alert = ({ showAlert, setShowAlert, title, message }) => {

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
        }, 2_000)
    }, [showAlert])

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    return (
        <div className={`${classes.alert} ${showAlert ? classes.animation : ''}`}>
            <div className={classes.icon}>
                <LightningIcon/>
            </div>
            <div className={classes.message}>
                <h5>{ title }</h5>
                <p>{ message }</p>
            </div>
            <div className={classes.close} onClick={handleCloseAlert}>
                <CloseIcon/>
            </div>
        </div>
    )
}

export { Alert }