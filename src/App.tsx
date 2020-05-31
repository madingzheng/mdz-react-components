import React from 'react';
import {Button} from './components/Button/Button'
import './App.css';

const app:React.FC = () => {
	return (
		<div>
			<Button disabled={false}>hello</Button>
			<Button onClick={() => {
				alert(111)
			}}>disabled</Button>
			<Button btnType='danger' size='lg'>Large</Button>
			<Button btnType='primary' size='small'>Small</Button>
			<Button btnType='link' disabled={true} href="https://www.baidu.com">www.baidu.com</Button>
		</div>
	)
};

export default app;