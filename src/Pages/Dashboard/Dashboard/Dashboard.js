import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'; 
import { Button } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    useRouteMatch
  } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import useAuth from '../../../hooks/useAuth';
import MangeOrders from '../MangeOrders/MangeOrders';
import ManageProduct from '../ManageProduct/ManageProduct';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 220;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const {user, logOut} = useAuth();
  const {admin} = useAuth();


  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <Link to='/home'>
            <Button variant="contained" color="inherit">Home</Button>
        </Link> <br /> <br />
        
        {/* ======Normal User===== */}
        {!admin && <Box>

          <Link to='/dashboard'>
            <Button variant="contained" color="inherit">Dashboard</Button>
        </Link> <br /> <br />

        <Link to={`${url}/payment`}>
            <Button variant="contained" color="inherit">Payment</Button>
        </Link> <br /> <br />

        <Link to={`${url}/myorder`}>
            <Button variant="contained" color="inherit">My Orders</Button>
        </Link> <br /> <br />

        <Link to={`${url}/review`}>
            <Button variant="contained" color="inherit">Review</Button>
        </Link> <br /> <br /> 

        </Box>
        
        }
      
        {/* ======Admin User===== */}
    {admin && <Box>

      <Link to={`${url}/makeAdmin`}>
            <Button variant="contained" color="inherit">makeAdmin</Button>
        </Link> <br /> <br />
      <Link to={`${url}/addProduct`}>
            <Button variant="contained" color="inherit">Add Product</Button>
        </Link> <br /> <br />
        <Link to={`${url}/managorders`}>
            <Button variant="contained" color="inherit">Manage Orders</Button>
        </Link> <br /> <br />
        <Link to={`${url}/managproduct`}>
            <Button variant="contained" color="inherit">Manage Product</Button>
        </Link> <br /> <br />
      
      </Box>}
      
 
       
        <Divider /><br /> 
        <Button onClick={logOut} style={{textDecoration:'none',color:'#000',marginLeft:'10px'}} variant="contained" color="inherit">Log Out</Button>
      </List>
      <Divider />
       
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> 
          <Typography variant="h6" noWrap component="div">
            Smart Camera
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
           <DashboardHome></DashboardHome>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct></AddProduct>
        </AdminRoute>
        <Route path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <AdminRoute path={`${path}/managorders`}>
          <MangeOrders></MangeOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/managproduct`}>
           <ManageProduct></ManageProduct>
        </AdminRoute>
        <Route path={`${path}/myorder`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
      </Switch>
         
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
