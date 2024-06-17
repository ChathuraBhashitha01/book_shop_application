import {Component} from "react";
import icon from "../../../images/pexels-minan1398-694740.jpg";

export class Contact extends Component {
    render() {
        return (
            <div>
                <div className="h-[88.3vh]">
                    <img src={icon} alt="" className="h-[30vh] w-[100vw] filter brightness-150 opacity-40"/>
                    <div className="flex">
                        <div className="w-[30vw] h-auto pt-2 pl-10 mx-auto">
                            <div className="p-2">
                                <h2 className="text-3xl text-black text-center underline decoration-2 ">Contact Us</h2>
                                <p className="text-[20px]">
                                    Got a technical issue?
                                    Want to contact us?
                                    Please let us assist you..</p>
                            </div>
                            <form className="h-auto p-2 justify-center">
                                <div className="pb-4">
                                    <label className="text-[15px]">Your Email:</label>
                                    <input type="email" className="w-[100%] h-[4vh] float-right border-[1px] border-black"/>
                                </div>
                                <div className="pb-2">
                                    <label className="text-[15px]">Your Subject:</label>
                                    <input type="text" className="w-[100%] h-[4vh] float-right border-[1px] border-black"/>
                                </div>
                                <div className="pb-2">
                                    <label className="text-[15px]">Your Message:</label>
                                    <textarea className="w-[100%] h-[12vh] float-right border-[1px] border-black"/>
                                </div>

                                <div className="mt-2">
                                    <button className="mt-5 p-[5px] bg-green-400 text-[15px] float-right">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}