import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Button} from './Button';

const defaultProps = {
	onClick: jest.fn()
}

const disabledProps = {
	onClick: jest.fn(),
	disabled: true
}

describe('test Button component', () => {
	it('Button Default', () => {
		const wrapper = render(<Button {...defaultProps}>Nice</Button>);
		const element = wrapper.getByText('Nice') as HTMLButtonElement;
		expect(element).toBeInTheDocument();
		expect(element.tagName).toBe('BUTTON');
		expect(element).toHaveClass('btn btn-default')
		expect(element.disabled).toBeFalsy();
		fireEvent.click(element);
		expect(defaultProps.onClick).toHaveBeenCalled()
	});

	it('Button Size', () => {
		const lg = render(<Button size="lg">Lg</Button>);
		const lgElement = lg.getByText('Lg') as HTMLButtonElement;
		const small = render(<Button size="sm">Sm</Button>);
		const smElement = small.getByText('Sm') as HTMLButtonElement;
		expect(lgElement).toHaveClass('btn btn-default btn-lg');
		expect(smElement).toHaveClass('btn btn-default btn-sm');
	});

	it('Button Type', () => {
		const defa = render(<Button btnType="default">default</Button>);
		const defaultEle = defa.getByText('default') as HTMLButtonElement;
		const danger = render(<Button btnType="danger">danger</Button>);
		const dangerEle = danger.getByText('danger') as HTMLButtonElement;
		const primary = render(<Button btnType="primary">primary</Button>);
		const primaryEle = primary.getByText('primary') as HTMLButtonElement;
		const link = render(<Button btnType="link">link</Button>);
		const linkEle = link.getByText('link') as HTMLButtonElement;
		expect(defaultEle).toBeInTheDocument()
		expect(dangerEle).toBeInTheDocument()
		expect(primaryEle).toBeInTheDocument()
		expect(linkEle).toBeInTheDocument()
		expect(defaultEle).toHaveClass('btn-default');
		expect(dangerEle).toHaveClass('btn-danger');
		expect(primaryEle).toHaveClass('btn-primary');
		expect(linkEle).toHaveClass('btn-link')
	});

	it('Link Button', () => {
		const link = render(<Button btnType="link" href="http://www.baidu.com">link2</Button>);
		const linkEle = link.getByText('link2');
		expect(linkEle).toBeInTheDocument()
		expect(linkEle.tagName).toEqual('A');
		expect(linkEle).toHaveClass('btn-link');
	})

	it('Disable Button', () => {
		const wrapper = render(<Button {...disabledProps}>disabled</Button>)
		const element = wrapper.getByText('disabled');
		fireEvent.click(element);
		expect(disabledProps.onClick).not.toHaveBeenCalled();
	})
});