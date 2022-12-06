import classes from './loader.module.scss'

const Loader = () => {
    return (
        <div className={classes.loader_wrapper}>
            <div className={classes.loader}>
                <div className={classes.spinner}>
                    <div className={classes.container}>
                        <div className={classes.hex0}></div>
                        <div className={classes.hex120}></div>
                        <div className={classes.hex240}></div>
                        <div className={classes.spinner}>
                            <div className={classes.container}>
                                <div className={classes.hex0}></div>
                                <div className={classes.hex120}></div>
                                <div className={classes.hex240}></div>
                                <div className={classes.spinner}>
                                    <div className={classes.container}>
                                        <div className={classes.hex0}></div>
                                        <div className={classes.hex120}></div>
                                        <div className={classes.hex240}></div>
                                        <div className={classes.spinner}>
                                            <div className={classes.container}>
                                                <div className={classes.hex0}></div>
                                                <div className={classes.hex120}></div>
                                                <div className={classes.hex240}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Loader } 