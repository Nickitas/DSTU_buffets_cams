
import classes from './button.module.scss'


const Button = ({ children, ...props }) => {
    return (
        <button className={classes.button} {...props}>
            { children }
        </button>
    )
}

export { Button }