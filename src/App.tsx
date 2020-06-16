import React from 'react';
import { Alert } from './components/Alert/Alert'
import { Menu } from './components/Menu/Menu';
import { MenuItem } from './components/Menu/MenuItem';
import './App.css';

const app:React.FC = () => {
	return (
		<div>
			<Alert title="this is alert!" description="this is a long description" closable={true}/>
			<Alert title="this is alert!" alertType="danger" closable={true}/>
			<Alert title="this is alert!" alertType="success" closable={true}/>
			<Alert title="this is alert!" alertType="warning" closable={true}/>
			<Menu>
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
			<Menu mode="vertical">
				<MenuItem index={0}>111</MenuItem>
				<MenuItem index={1}>222</MenuItem>
				<MenuItem index={2}>333</MenuItem>
			</Menu>
		</div>
	)
};

export default app;