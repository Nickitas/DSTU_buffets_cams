

import CamItem from './CamItem/CamItem'
import classes from './cam_list.module.scss'


const CamList = ({ data, openCam, stream, setStream }) => {

    console.log(data.id)

    return (
        <div className={classes.cam_list}>
            {
                openCam == '1' ? <CamItem item={data[0]}/>
                :
                openCam == '2' ? <CamItem item={data[1]}/>
                :
                openCam == '3' ? <CamItem item={data[2]}/>
                :
                openCam == '4' ? <CamItem item={data[3]}/>
                :
                data.map((item, index) => (
                    <CamItem key={index} item={item} 
                        stream={stream} setStream={setStream}
                    />
                ))
            }
        </div>
    )
}

export default CamList