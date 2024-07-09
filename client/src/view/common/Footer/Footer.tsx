import {Component} from "react";
import facebookIcon from '../../../images/social-media.png';
import xIcon from '../../../images/twitter (1).png';
import instarIcon from '../../../images/video.png';

export class Footer extends Component {
    render() {
        return (
            <div className="p-2 bg-gradient-to-r from-[#444544] to-white flex  ">
                <div className="pl-5">
                    <label className="text-white">Follow Us</label>
                    <div>
                        <img src={xIcon} alt="" className="w-7 inline-block pl-2"/>
                        <img src={facebookIcon} alt="" className="w-8 inline-block pl-2"/>
                        <img src={instarIcon} alt="" className="w-8 inline-block pl-2"/>
                    </div>

                </div>
                <p className="pt-1 pr-3 text-[10px] text-[#e6f0e6] hover:text-green-400">Copyright © 2023</p>
                <h1 className="text-1xl text-black">Book Shop</h1>
            </div>
        );
    }
}