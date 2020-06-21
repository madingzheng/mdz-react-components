import React, {FC, useContext, useState} from 'react';
import ClassNames from 'classnames';
import { MenuContext } from './Menu';
import { MenuItemProps } from './MenuItem';

export interface SubMenuProps {
	index?: string,
	title: string,
	className?: string
};

export const SubMenu:FC<SubMenuProps> = (props) => {
	const {
		index,
		title,
		className,
		children
	} = props;
	const content = useContext(MenuContext);
	const classes = ClassNames('menu-item submenu-item', className, {
		'is-active': content.index === index
	});
	const openedSubMenus = content.defaultOpenSubMenus;
	console.log('index', props);
	const isOpend = (index && content.mode === 'vertical' && openedSubMenus) ? openedSubMenus.includes(index) : false;
	const [menuOpen, setMenuOpen] = useState(isOpend);
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setMenuOpen(!menuOpen);
	};

	let timer:any;
	const handleMouse = (e:React.MouseEvent, toggle: boolean) => {
		clearTimeout(timer);
		e.preventDefault();
		timer = setTimeout(() => {
			setMenuOpen(toggle);
		}, 300);
	};

	const clickEvents = content.mode === 'vertical' ? {
		onClick: handleClick
	} : {};
	const hoverEvents = content.mode !== 'vertical' ? {
		onMouseEnter: (e: React.MouseEvent) => {handleMouse(e, true)},
		onMouseLeave: (e: React.MouseEvent) => {handleMouse(e, false)}
	} : {}
	const renderChildren = () => {
		const subMenuClass = ClassNames('mdz-submenu', {
			'menu-opened': menuOpen
		})
		const childComponent = React.Children.map(children, (child, i) => {
			const childElement = child as React.FunctionComponentElement<MenuItemProps>
			const {	displayName } = childElement.type;
			if (displayName === 'MenuItem') {
				return React.cloneElement(childElement, {
          index: `${index}-${i}`
				})
			} else {
				console.error('error');
			}
		});
		return (
			<ul className={subMenuClass}>
				{childComponent}
			</ul>
		)
	}
	return (
		<li className={classes} key={index}	{...hoverEvents}>
			<div className="submenu-title" {...clickEvents}>
				{title}
			</div>
			{renderChildren()}
		</li>
	)
};

SubMenu.displayName = 'SubMenu';

