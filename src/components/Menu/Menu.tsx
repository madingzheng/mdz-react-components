import React, {FC, createContext, useState} from 'react';
import ClassNames from 'classnames';
import { MenuItemProps } from './MenuItem';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallBack = (SelectionIndex:string) => void

export interface MenuProps {
	/**默认 active 的菜单项的索引值 */
	defaultIndex?: string,
	className?: string,
  /**菜单类型 横向或者纵向 */
	mode?: MenuMode,
	style?: React.CSSProperties,
  /**点击菜单项触发的回掉函数 */
	onSelect?: SelectCallBack,
	defaultOpenSubMenus?: string[]
}

// MenuContext
interface IMenuContext {
  index: string;
	onSelect?: SelectCallBack;
	mode?: MenuMode,
	defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({index: '0'})

export const Menu:FC<MenuProps> = (props) => {
	const {
		className,
		mode,
		style,
		children,
		defaultIndex,
		defaultOpenSubMenus,
		onSelect
	} = props;
	const [ currentActive, setActive ] = useState(defaultIndex)
	const classes = ClassNames('mdz-menu', className, {
		'menu-vertical': mode === 'vertical',
		'menu-horizontal': mode !== 'vertical'
	})
	const handleClick = (index: string) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
	}
	const renderChildren = () => {
		return React.Children.map(children, (child, index) => {
			const childElement = child as React.FunctionComponentElement<MenuItemProps>;
			const { displayName } = childElement.type;
			if (displayName === 'MenuItem' || displayName === 'SubMenu') {
				return React.cloneElement(childElement, {
					index: index.toString()
				})
			} else {
				console.error('error');
			}
		})
	}
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
		onSelect: handleClick,
		mode,
		defaultOpenSubMenus
  }
	return (
		<MenuContext.Provider value={passedContext}>
			<ul className={classes} style={style} 
			data-testid="test-menu">
					{renderChildren()}
			</ul>
		</MenuContext.Provider>
	)
};

Menu.defaultProps = {
	defaultIndex: '0',
	mode: 'horizontal'
};