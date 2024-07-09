import {Component} from "react";
import icon from "../../../images/creative-abstract-book-feather-logo-design-vector.jpg";
import {Link} from "react-router-dom";
import cartIcon from "../../../images/add-to-cart.png";

export class UserNavBar extends Component {
    render() {
        return (
            <div className="p-2 flex bg-gradient-to-r from-[#444544] to-white relative ">
                <img className="h-5 w-5 ml-1 mt-1 mr-1" src={icon} alt=""/>

                <h1 className="text-1x1 text-black text-lg font-bold">
                    Book Shop
                </h1>

                <ul className="list-none ml-2 pl-3">
                    <li className="inline-block mr-2 text-black cursor-pointer hover:text-white pl-[20px]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="inline-block mr-2 text-black cursor-pointer hover:text-white pl-[20px]">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="inline-block mr-2 text-black cursor-pointer hover:text-white pl-[20px]">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <button className="text-[20px] text-black  pl-3 pr-3 absolute top-0 bottom-0 right-[100px] mx-auto">
                    <Link
                        to="/cart"><img src={cartIcon} alt="" className="w-10 h-10 inline-block pr-1"/></Link></button>
                <button className="text-[20px] text-black  pl-3 pr-3 absolute top-0 bottom-0 right-8 mx-auto"><Link
                    to="/login">Sing In</Link></button>

            </div>
        );
    }
}