import {Component} from "react";
import {NavBar} from "../NavBar/NavBar";
import {Footer} from "../Footer/Footer";
import {MainContent} from "../MainContent/MainContent";

export class DefaultLayout extends Component {
    render() {
        return (
            <div className="w-[100vw] h-[100vh]">
                <NavBar></NavBar>
                <MainContent></MainContent>
                <Footer></Footer>
            </div>
        );
    }
}