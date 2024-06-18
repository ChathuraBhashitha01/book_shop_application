import {Component} from "react";
import icon from "../../../images/cover.jpg";

export class Login extends Component {
    render() {
        return (
            <div className="h-[100vh] w-[100vw] overflow-y-hidden overflow-x-hidden">
                <div className="h-[100vh] w-[130vw] transition-transform duration-1000 -translate-x-[30vw]">
                    <div className="w-[100vw] h-[100%] inline-block">
                        <img src={icon} alt="" className="w-[100%] h-[100%]"/>
                    </div>
                    <div className="w-[30vw] h-[100%] relative inline-block border-black border-[1px]">
                        <div
                            className="w-[100%] h-[30vh] mt-4 mb-4 pl-9 pr-9 absolute bottom-0 top-[30vh] right-0 mx-auto ">
                            <h2 className="pt-2 pb-3 text-3xl text-blue-700 underline decoration-2 ml-5">Sign In</h2>
                            <form className="h-auto p-2 justify-center">
                                <div className="pb-2 ml-4">
                                    <label className="text-[15px]">Email:</label>
                                    <input className="float-right border-[1px] border-blue-700 w-[100%]" type="email"/>
                                </div>
                                <div className="pb-2 ml-4">
                                    <label className="text-[15px]">Password:</label>
                                    <input className="float-right border-[1px] border-blue-700 w-[100%]"
                                           type="password"/>
                                </div>
                                <div className="mt-10 ml-4">
                                    <button className="w-[100%] p-[6px] bg-blue-700 text-[15px]">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}