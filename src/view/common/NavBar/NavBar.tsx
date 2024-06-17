import {Component} from "react";
import icon from '../../../images/creative-abstract-book-feather-logo-design-vector.jpg';
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <div className="p-2 flex border-black border-[1px] bg-[#444544]">
                <img className="h-5 w-5 ml-1 mt-1 mr-1" src={icon} alt=""/>

                <h1 className="text-1x1 text-black text-lg font-bold">
                    Book Shop
                </h1>

                <ul className="list-none ml-[100px] pl-[350px] ">
                    <li className="inline-block mr-2 text-black cursor-pointer hover:text-white pl-[20px]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="inline-block mr-2 text-black cursor-pointer hover:text-white pl-[20px]">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="inline-block mr-2 text-black cursor-pointer hover:text-white pl-[20px]">
                        Contact
                    </li>
                    <li className="inline-block mr-2 text-black cursor-pointer hover:text-white pl-[20px]">
                        Cart
                    </li>
                </ul>


            </div>
        );
    }
}