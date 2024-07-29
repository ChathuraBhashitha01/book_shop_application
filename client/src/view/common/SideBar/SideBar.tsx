import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from "react-router-dom";
import React from "react";

export const SideBar = () => {
    return (
        <Sidebar className="w-25 h-[93.2%] bg-[url('/src/images/cover.jpg')] bg-cover bg-center">
            {/* <Menu>
                <SubMenu label="Charts" className="border bg-blue-600">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem className="border bg-blue-600"> Documentation </MenuItem>
                <MenuItem className="border bg-blue-600"> Calendar </MenuItem>
            </Menu>*/}

            <ul className="flex flex-col ">

                <Link to="/" className='w-auto h-12 bg-blue-600 shadow-md  border-black border-2 mt-1'>
                    <li className="hidden sm:inline text-black hover:underline">Home</li>
                </Link>

                <Link to="/" className='w-auto h-12 bg-blue-600 shadow-md  border-black border-2 mt-1'>
                    <li className="hidden sm:inline text-black hover:underline">Home</li>
                </Link>

                <Link to="/" className='w-auto h-12 bg-blue-600 shadow-md  border-black border-2 mt-1'>
                    <li className="hidden sm:inline text-black hover:underline">Home</li>
                </Link>

            </ul>
        </Sidebar>
    );
};