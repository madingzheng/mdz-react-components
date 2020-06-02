import React from 'react';
import {Alert} from './components/Alert/Alert'
import './App.css';

const app:React.FC = () => {
	return (
		<div>
			<Alert title="this is alert!" description="this is a long description" closable={true}/>
			<Alert title="this is alert!" alertType="danger" closable={true}/>
			<Alert title="this is alert!" alertType="success" closable={true}/>
			<Alert title="this is alert!" alertType="warning" closable={true}/>
		</div>
	)
};

export default app;