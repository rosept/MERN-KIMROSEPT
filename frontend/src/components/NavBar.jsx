
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background : #111111

`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: #f73378;
    text-decoration: none;
`;

const Toolbars = styled(Toolbar)`
    display: flex !important;
    justify-content: center;
`;


const NavBar = () => {
    return(
       <Header position="static"> 
            <Toolbars>
                <Tabs to='/'>User Management System</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add Users</Tabs>
            </Toolbars>
       </Header>
    )
}

export default NavBar;