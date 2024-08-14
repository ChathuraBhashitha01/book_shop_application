import {Component} from "react";
import icon from "../../../images/cover.jpg";
import {Link} from "react-router-dom";

export class Login extends Component {
    render() {
        return (
            <div className="h-[100vh] w-[100vw] overflow-y-hidden overflow-x-hidden">
                <div className="h-[100vh] w-[130vw] transition-transform duration-1000 -translate-x-[30vw]">
                    <div className="w-[100vw] h-[100%] inline-block">
                        <img src={icon} alt="" className="w-[100%] h-[100%]"/>
                    </div>
                    <div className="w-[30vw] h-[100%] relative inline-block border-black border-[1px]">
                        <div className="w-[100%] h-[30vh] mt-4 mb-4 pl-9 pr-9 absolute bottom-0 top-[25vh] right-0 mx-auto ">
                            <h2 className="text-3xl text-center font-semibold my-7">Sign In</h2>
                            <form className="flex flex-col gap-4">

                                <input type="email" placeholder="email" className="border p-3 rounded-lg" id='email'/>
                                <input type="password" placeholder="password" className="border p-3 rounded-lg"
                                       id='password'/>
                                <button
                                    className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                                    <Link to="/user">Sign In</Link></button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}