// , { useContext }
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { DeleteContext } from './context/ContextProvider';
// import { Alert, AlertHeading } from 'react-bootstrap';

const Navbar = () => {

    // const [delalert, setDelAlert] = useContext(DeleteContext);
    // console.log(delalert, "Delalert navbar");

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: "#232f3e" }}>
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}><MenuIcon /></IconButton>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>Redux-TO-DO App</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* {
                delalert && (<Alert variant='danger' onClose={() => setDelAlert(false)} dismissible>
                    <AlertHeading>Your Task Remove Successfully</AlertHeading>
                </Alert>)
            } */}
        </>
    );
}

export default Navbar;
