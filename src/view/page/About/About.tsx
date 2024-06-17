import {Component} from "react";
import icon from "../../../images/pexels-minan1398-694740.jpg"

export class About extends Component {
    render() {
        return (
            <div className="h-[88.3vh]">
                <img src={icon} alt="" className="h-[30vh] w-[100vw] filter brightness-150 opacity-40"/>
                <div className="w-[30vh] h-[30vh] bottom-1 border-black">

                </div>
            </div>
        );
    }
}