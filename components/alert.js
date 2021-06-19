import cn from 'classnames'

export default function Alert({ children, success }) {
    return (
        <div
            className={cn({
                'text-green-400': success,
                'text-red-400': !success
            })}
        >
            {children}
        </div>
    )
}
