import React from 'react'
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import bookIcon from '../../../images/creative-abstract-book-feather-logo-design-vector.jpg';
import icon from "../../../images/creative-abstract-book-feather-logo-design-vector.jpg";


const settings = ['Profile','Logout'];
export const  UserNavBar=()=> {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div>
            <header className="bg-blue-600 shadow-md h-15">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                        <samp className="text-white">MyBook</samp>
                        <samp className="text-black">Management</samp>
                    </h1>
                    <form className="bg-slate-100 p-3 rounded-lg items-center">
                        <input type="text" placeholder="Search...."
                               className="bg-transparent focus:outline-none w-24 sm:w-64"/>
                        {/*<FaSearch className="text-slate-600" />*/}
                    </form>
                    <ul className="flex gap-4">
                        <Link to="/">
                            <li className="hidden sm:inline text-black hover:underline">Save</li>
                        </Link>
                        <Link to="/about">
                            <li className="hidden sm:inline text-black hover:underline">Sale</li>
                        </Link>
                    </ul>
                    <Box sx={{flexGrow: 0}} className="absolute top-0 bottom-0 right-8 mx-auto">
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </div>
            </header>
            <div className="w-10 h-[100%] bg-slate-200 shadow-md">

            </div>
        </div>
    )
}
