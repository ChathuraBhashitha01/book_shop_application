import {Component} from "react";

export class Footer extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex justify-center " >
                <p className="pt-1 pr-3 text-[10px] text-[#e6f0e6] hover:text-green-400">Copyright © 2023</p>
                <h1 className="text-1xl text-black">Book Shop</h1>
            </div>
        );
    }
}