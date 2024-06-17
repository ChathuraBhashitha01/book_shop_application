import {Component} from "react";
import {NavBar} from "../NavBar/NavBar";
import {Footer} from "../Footer/Footer";
import {Home} from "../../page/Home/Home";

export class DefaultLayout extends Component {
    render() {
        return (
            <div className="w-[100vw] h-[100vh]">
                <NavBar></NavBar>
                <Home></Home>
                <Footer></Footer>
            </div>
        );
    }
}