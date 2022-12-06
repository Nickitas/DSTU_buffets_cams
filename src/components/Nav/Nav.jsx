import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CogIcon, CameraIcon, MenuIcon, CloseIcon, SantasCapIcon, MistletoeIcon } from '../svg.module' 
import classes from './nav.module.scss'

const Nav = ({ data, openCam, setOpenCam }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className={classes.nav}>
            <div className='container'>
                <div className={classes.row}>

                    <div className={classes.list}>
                        <Link to={'/'}>
                            <div className={classes.brand}>
                                <CogIcon/>
                                <h2>
                                    <SantasCapIcon/>
                                    Cam
                                </h2>
                            </div>
                        </Link>
                        <ul>
                            <li className={openCam == 'all' ? classes.active : ''} onClick={() => setOpenCam('all')}>
                                <a>All</a>
                            </li>
                            {
                                data.map((item, key) => { return (
                                    <li className={openCam == item.id ? classes.active : ''} key={key} onClick={() => setOpenCam(item.id)}>
                                        <a> <CameraIcon/> {item.title}</a>
                                    </li>
                                )})
                            }
                        </ul>
                    </div>

                    <div className={classes.menu_btn} onClick={() => setMenuOpen(e => !e)}>
                        {menuOpen ? <CloseIcon/> : <MenuIcon/>}
                    </div>

                    <div className={`${classes.dropdown} ${menuOpen && classes.open}`}>
                        <div className='container'>
                            <div className={classes.col}>
                                {
                                    data.map((item, key) => (
                                    <a key={key} onClick={() => {
                                        setOpenCam(item.id)
                                        setMenuOpen(false)
                                    }}>
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>  
            </div>
            <MistletoeIcon />
        </nav>
    )
}

export default Nav