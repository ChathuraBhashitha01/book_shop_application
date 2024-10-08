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
import SearchIcon from "@mui/icons-material/Search";


const settings = ['Profile','Logout'];
export const  UserNavBar=()=> {
    return (
        <header className="bg-[#f9edee] shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                    <samp className="text-slate-500">My</samp>
                    <samp className="text-slate-700">Book</samp>
                </h1>

                <form className="bg-white border-[0.5px] shadow-xl ml-52">
                    <input type="text" placeholder="Search...." className="bg-transparent w-64  "/>
                    <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </form>

                <ul className="flex flex-row ml-5">
                    <li className="hidden sm:inline text-black text-[15px] ml-8  hover:underline"> <Link to="/user/" >Add Book</Link></li>
                    <li className="hidden sm:inline text-black text-[15px] ml-8 hover:underline"><Link to="/user/bookDetails" >View Details </Link></li>
                    <li className="hidden sm:inline text-black text-[15px] ml-8 hover:underline"><Link to="/user/sales">View Sales </Link></li>
                    <li className="hidden sm:inline text-black text-[15px]  ml-8 hover:underline"> <Link to="/user/sign-up">Add User</Link></li>
                    <li className="hidden sm:inline text-black text-[15px]  ml-8 hover:underline"> <Link to="/">Log Out</Link></li>
                </ul>

            </div>
        </header>
    )
}
