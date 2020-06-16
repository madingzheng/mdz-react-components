import React from 'react';
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import { Menu,	MenuProps } from './Menu';
import { MenuItem } from './MenuItem';

const testProps:MenuProps = {
	defaultIndex: 0,
	onSelect: jest.fn(),
	className: 'test'
};

const testVerProps:MenuProps = {
	defaultIndex: 0,
	mode: 'vertical'
};

let wrapper: RenderResult, menuElement:HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;
const generateMenu = (props:MenuProps) => {
	return (
		<Menu {...props}>
      <MenuItem index={0}>
        active
      </MenuItem>
      <MenuItem index={1} disabled>
        disabled
      </MenuItem>
      <MenuItem index={2}>
        mdz
      </MenuItem>
		</Menu>
	)
};


describe('test menu', () => {
	beforeEach(() => {
		wrapper = render(generateMenu(testProps));
		menuElement = wrapper.getByTestId('test-menu');
		activeElement = wrapper.getByText('active');
		disabledElement = wrapper.getByText('disabled');
	});
	it('should first render', () => {
		expect(menuElement).toBeInTheDocument();
		expect(menuElement).toHaveClass('mdz-menu test');
		expect(menuElement.getElementsByTagName('li').length).toEqual(3);
		expect(activeElement).toBeInTheDocument();
		expect(activeElement).toHaveClass('is-active');
		expect(disabledElement).toHaveClass('is-disabled');
	});
	it('click items should change active and callback', () => {
		const thirdItem = wrapper.getByText('mdz');
		fireEvent.click(thirdItem);
		expect(thirdItem).toHaveClass('is-active');
		expect(activeElement).not.toHaveClass('is-active');
		expect(testProps.onSelect).toHaveBeenCalledWith(2);
		fireEvent.click(disabledElement);
		expect(disabledElement).not.toHaveClass('is-active');
		expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
	})
	it('should render vertical mode', () => {
		cleanup();
		const wrapper = render(generateMenu(testVerProps));
		const element = wrapper.getByTestId('test-menu');
		expect(element).toHaveClass('menu-vertical');
	})
})