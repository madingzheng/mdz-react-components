import React, {FC,CSSProperties, useContext} from 'react';
import ClassNames from 'classnames';
import { MenuContext } from './Menu';

export interface MenuItemProps {
	index?: string,
	disabled?: boolean,
	className?: string,
	style?: CSSProperties,
};

export const MenuItem:FC<MenuItemProps> = (props) => {
	const {
		disabled,
		style,
		children,
		index
	} = props;
	const content = useContext(MenuContext);
	const classes = ClassNames('menu-item', ClassNames, {
		'is-disabled': disabled,
		'is-active': content.index === index
	})
	const handleClick = () => {
		if(content.onSelect && !disabled && index) {
			content.onSelect(index);
		}
	}
	return (
		<li className={classes} style={style} onClick={handleClick}>
			{children}
		</li>
	)
};

MenuItem.displayName = 'MenuItem';
MenuItem.defaultProps = {
	disabled: false
};
