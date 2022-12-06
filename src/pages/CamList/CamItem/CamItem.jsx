import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonSm } from '../../../components/UI/ButtonSm/ButtonSm'
import { ScannerIcon, StatisticsIcon } from '../../../components/svg.module'
import classes from './cam_item.module.scss'

const CamItem = ({ item, stream, setStream }) => {

    const [load, setLoad] = useState(false)

    setInterval(() => {
        setLoad(true)
    }, 300)

    return (
        <div className={classes.cam_item}>
            <div className={classes.stream_wrapper}>
                {
                    load ? (
                        <div className={classes.stream} style={ item.cap == 'no' ? {
                            background: `center / cover no-repeat url(${item.path}), center / cover no-repeat url(../../../../public/bg.png)`} : {background: `center / cover no-repeat url(../../../../public/none.jpg)`}}
                        ></div>
                    ) : ''
                }
            </div>
            {
                item.cap === 'yes' ? (
                    <div className={classes.cam_name}>
                        <h3>{item.title} недоступна</h3>
                    </div>
                ) : (<>
                    <div className={classes.cam_name}>
                        <h3>{item.name}</h3>
                    </div>
                    <Link to={'statistic'}>
                        <ButtonSm data-statistics>
                            <StatisticsIcon/>
                        </ButtonSm>
                    </Link>
                    <ButtonSm data-scanner onClick={() => setStream(e => !e)} style={stream ? {color:'#646cff'} : {}}>
                        <ScannerIcon/>
                    </ButtonSm>
                </>)
            }
        </div>
    )
}

export default CamItem