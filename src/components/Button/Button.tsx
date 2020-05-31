import React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import classNames from 'classnames';

type ButtonSize = 'lg' | 'small';

type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps extends ButtonProps{
	className?: string,
	disabled?: boolean,
	size?: ButtonSize,
	btnType?: ButtonType,
	href?: string
	children: React.ReactNode,
}
type ButtonProps = Partial<BaseButtonProps & ButtonHTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLElement>>;

export const Button:FC<ButtonProps> = (props) => {
	const { 
    btnType,
    className,
    disabled,
    size,
    children,
		href,
		...restProps
	} = props
	const classes = classNames('btn', className, {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		'disabled': (btnType === 'link') && disabled
	});
	if (btnType === 'link' && href) {
		return (
			<a href={href} className={classes} {...restProps}>
				{children}
			</a>
		)
	} else {
		return (
			<button className={classes} disabled={disabled} {...restProps}>
				{children}
			</button>
		)
	}
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}
