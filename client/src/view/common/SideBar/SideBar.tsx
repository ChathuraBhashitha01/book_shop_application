import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from "react-router-dom";
import React from "react";

export const SideBar = () => {
    return (
        <Sidebar className="w-25 h-[93.2%] bg-[#f9edee]">
            {/* <Menu>
                <SubMenu label="Charts" className="border bg-blue-600">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem className="border bg-blue-600"> Documentation </MenuItem>
                <MenuItem className="border bg-blue-600"> Calendar </MenuItem>
            </Menu>*/}

            <ul className="flex flex-col ">

                <Link to="/user/" className='w-auto h-12 bg-[#f9edee] shadow-md   mt-1'>
                    <li className="hidden sm:inline text-black text-lg ml-14 mt-6 hover:underline">Add Book</li>
                </Link>

                <Link to="/user/bookDetails" className='w-auto h-12 bg-[#f9edee] shadow-md  mt-1'>
                    <li className="hidden sm:inline text-black text-lg hover:underline">View Table</li>
                </Link>

                <Link to="/" className='w-auto h-12 bg-[#f9edee] shadow-md mt-1'>
                    <li className="hidden sm:inline text-black text-lg hover:underline">Home</li>
                </Link>

            </ul>
        </Sidebar>
    );
};