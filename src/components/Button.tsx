import classNames from 'classnames'

type Size = 'small' | 'normal'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean
  size?: Size
}

export const Button = ({
  children,
  outlined = false,
  size = 'normal',
  ...props
}: React.PropsWithChildren<Props>) => {
  const className = classNames('button', {
    'button--outlined': outlined && !props.disabled,
    'button--small': size === 'small',
  })

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
