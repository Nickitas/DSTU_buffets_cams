

import classes from './button_sm.module.scss'

const ButtonSm = ({ children, ...props }) => {
    return (
        <div className={classes.button_sm} {...props}>
            { children }
        </div>
    )
}

export { ButtonSm }