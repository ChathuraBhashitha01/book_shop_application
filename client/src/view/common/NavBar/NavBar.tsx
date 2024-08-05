import React, {Component} from "react";
import icon from '../../../images/creative-abstract-book-feather-logo-design-vector.jpg';
import cartIcon from '../../../images/add-to-cart.png';
import {Link} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export class NavBar extends Component {
    render() {
        return (
            <div className="p-2 flex  relative ">
                <img className="h-5 w-5 ml-1 mt-1 mr-1" src={icon} alt=""/>

                <h1 className="text-1x1 text-black text-lg font-bold">
                    Book Shop
                </h1>

                <ul className="list-none ml-2 pl-3">
                    <li className="inline-block mr-2 text-black cursor-pointer hover:text-blue-700 pl-[20px]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="inline-block mr-2 text-black cursor-pointer hover:text-blue-700 pl-[20px]">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="inline-block mr-2 text-black cursor-pointer hover:text-blue-700 pl-[20px]">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <form className="border-[0.5px] shadow-xl ml-52">
                    <input type="text" placeholder="Search...." className="bg-transparent w-64  "/>
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </form>

                <button className="text-[20px] text-black  pl-3 pr-3 absolute top-0 bottom-0 right-[100px] mx-auto">
                    <Link
                        to="/cart"><img src={cartIcon} alt="" className="w-10 h-10 inline-block pr-1"/></Link></button>
                <button className="text-[20px] text-black  pl-3 pr-3 absolute top-0 bottom-0 right-8 mx-auto"><Link
                    to="/login">Sing In</Link></button>

            </div>
        );
    }
}