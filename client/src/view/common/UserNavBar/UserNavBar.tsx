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
    return (
        <header className="bg-blue-600 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                    <samp className="text-slate-500">My</samp>
                    <samp className="text-slate-700">Book</samp>
                </h1>
                <form className="bg-slate-100 border-[0.5px] shadow-xl p-3 rounded-lg ">
                    <input type="text" placeholder="Search...." className="bg-transparent focus:outline-none w-24 sm:w-64 h-6 "/>
                </form>

            </div>
        </header>
    )
}
