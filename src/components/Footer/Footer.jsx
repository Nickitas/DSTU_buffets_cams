import { useState } from 'react'
import { Alert } from '../UI/Alert/Alert'
import { Button } from '../UI/Button/Button'
import { InfoIcon, CopyIcon  } from '../svg.module'
import logo from '../../../public/logo.svg'
import classes from './footer.module.scss'

const Footer = () => {

    const [showAlert, setShowAlert] = useState(false)
    const [alertTitle, setAlertTitle] = useState('')
    const [alertMess, setAlertMess] = useState('')


    const handleCopyTelegram = () => {
        setAlertMess('Напишите разработчику 💖')
        const num = Math.floor(Math.random() * 2)
        if(num == 1) {
            setAlertTitle('@Nidatsky')
        } else {
            setAlertTitle('@mongooste')
        }
        navigator.clipboard.writeText(alertTitle)
        setShowAlert(true)
    }

    const handleHowItsWork = () => {
        setAlertTitle('Как это работает?')
        setAlertMess('Веб-приложение, разработанное в УКБ ОСТК ДГТУ, предназначенное для просмотра потока с ip-камер буфетов и столовых университета')
        setShowAlert(true)
    }

    return (
        <footer className={classes.footer}>
           <div className='container'>
                <div className={classes.row}>
                    <h5 className={classes.logo}>
                        <img src={logo} alt='logo' />
                        <span>DSTU Buffets Cams</span>
                    </h5>
                </div>
                <div className={classes.row}>
                
                    <div className={classes.list}>
                        <a className={classes.info} onClick={handleHowItsWork}>
                            <InfoIcon/>
                            Как это работает?
                        </a>
                        <div className={classes.copywrite}>
                            © Cams from <b>CONTROLL</b> 2022
                        </div>
                    </div>

                    <Button onClick={handleCopyTelegram}>
                        <span>Devs</span>
                        <CopyIcon/>
                    </Button>
                
                </div>
           </div>

           <Alert 
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                title={alertTitle}
                message={alertMess}
            />

        </footer>
    )
}

export default Footer