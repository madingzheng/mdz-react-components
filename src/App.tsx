import React from 'react';
import { Button } from './components/Button/Button'
// import { Alert } from './components/Alert/Alert'
// import { Menu } from './components/Menu/Menu';
// import { MenuItem } from './components/Menu/MenuItem';
// import { SubMenu } from './components/Menu/subMenu';
import './App.css';

const app:React.FC = () => {
	return (
		<div className="app_box">
			<div className="container_box">
				<Button>12</Button>
				{/* <Alert title="this is alert!" description="this is a long description" closable={true}/>
				<Alert title="this is alert!" alertType="danger" closable={true}/>
				<Alert title="this is alert!" alertType="success" closable={true}/>
				<Alert title="this is alert!" alertType="warning" closable={true}/>
				<Menu>
					<MenuItem>
						active
					</MenuItem>
					<MenuItem disabled>
						disabled
					</MenuItem>
					<SubMenu title="dropdown">
						<MenuItem>
							dropdown1
						</MenuItem>
						<MenuItem>
							dropdown2
						</MenuItem>
					</SubMenu>
					<MenuItem>
						link
					</MenuItem>
				</Menu>
				<Menu mode="vertical" defaultOpenSubMenus={['223']}> */}
					{/* <MenuItem>111</MenuItem>
					<SubMenu title="dropdown2" index={'122'}>
						<MenuItem>
							dropdown1
						</MenuItem>
						<MenuItem>
							dropdown2
						</MenuItem>
					</SubMenu>
					<MenuItem>333</MenuItem>
				</Menu> */}
			</div>
		</div>
	)
};

export default app;