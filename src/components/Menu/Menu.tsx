import React, {FC, createContext, useState} from 'react';
import ClassNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallBack = (SelectionIndex:number) => void

export interface MenuProps {
	/**默认 active 的菜单项的索引值 */
	defaultIndex?: number,
	className?: string,
  /**菜单类型 横向或者纵向 */
	mode?: MenuMode,
	style?: React.CSSProperties,
  /**点击菜单项触发的回掉函数 */
	onSelect?: SelectCallBack
}

// MenuContext
interface IMenuContext {
  index: number;
  onSelect?: SelectCallBack;
}

export const MenuContext = createContext<IMenuContext>({index: 0})

export const Menu:FC<MenuProps> = (props) => {
	const {
		className,
		mode,
		style,
		children,
		defaultIndex,
		onSelect
	} = props;
	const [ currentActive, setActive ] = useState(defaultIndex)
	const classes = ClassNames('mdz-menu', className, {
		'menu-vertical': mode === 'vertical',
		'menu-horizontal': mode !== 'vertical'
	})
	const handleClick = (index: number) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
	}
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }
	return (
		<MenuContext.Provider value={passedContext}>
			<ul className={classes} style={style} data-testid="test-menu">
					{children}
			</ul>
		</MenuContext.Provider>
	)
};

Menu.defaultProps = {
	defaultIndex: 0,
	mode: 'horizontal'
}