import { Outlet } from 'react-router-dom'
import { Garland } from '../components/UI/Garland/Garland'
import { Snowman } from '../components/UI/Snowman/Snowman'
import { Christmastree } from '../components/UI/Christmastree/Christmastree'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'


const Layout = ({ data, openCam, setOpenCam }) => {

    return (
        <>
            <Nav data={data} openCam={openCam} setOpenCam={setOpenCam}/>
            <Garland/>
            <main>
                <div className='container'>
                    <Outlet data={data} />
                </div>
            </main>
            <Snowman/>
            <Christmastree/>
            <Footer/>
        </>
    )
}

export { Layout }