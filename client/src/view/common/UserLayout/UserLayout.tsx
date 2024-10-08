import {Component} from "react";
import {UserNavBar} from "../UserNavBar/UserNavBar";
import {UserContent} from "../UserContent/UserContent";
import {SideBar} from "../SideBar/SideBar";


export class UserLayout extends Component {
    render() {
        return (
            <div className="w-[100vw] h-[100vh]">
                <UserNavBar/>
                <SideBar/>
                <UserContent/>
            </div>
        );
    }
}