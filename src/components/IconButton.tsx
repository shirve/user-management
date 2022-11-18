import classNames from 'classnames'

export const IconButton = ({
  children,
  ...props
}: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
  const className = classNames('icon-button', {})

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
