import React, { FC, useState } from 'react';
import close from './close.svg'
import classNames from 'classnames';

type AlertType = 'success' | 'default' | 'danger' | 'warning';

interface Onclose {
	():void
}

interface BaseAlertProps {
	title: string,
	description?: string,
	alertType?:AlertType,
	closable?: boolean
}
export const Alert:FC<BaseAlertProps> = (props) => {
	const {
		title,
		description,
		alertType,
		closable,
		...restProps
	} = props
	const [isShow, setShow] = useState(true);
	const classes = classNames('mdz-alert',{
		[`mdz-${alertType}-alert`]: alertType
	});
	const titleClasses = classNames('mdz-alert-title', {
		'bold-title': description
	})
	const imgClasses = classNames('mdz-alert-close')
	if (isShow) {
		if (description) {
			return (
				<div className={classes} {...restProps}>
					<span className={titleClasses}>{title}</span>
					<p>{description}</p>
					{closable ? <span className={imgClasses} onClick={() => {setShow(false)}}><img src={close} alt="close" /></span> : ''}
				</div>
			)
		} else {
			return (
				<div className={classes} {...restProps}>
					<span className={titleClasses}>{title}</span>
					{closable ? <span className={imgClasses} onClick={() => {setShow(false)}}><img src={close} alt="close" /></span> : ''}
				</div>
			)
		}
	} else {
		return (
			<>
			</>
		)
	}
}

Alert.defaultProps = {
	alertType: 'default',
	closable: true
};