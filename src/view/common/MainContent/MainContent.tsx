import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../page/Home/Home";
import {About} from "../../page/About/About";
import {Contact} from "../../page/Contact/Contact";

export class MainContent extends Component {
    render() {
        return (
            <div className="overflow-hidden overflow-y-scroll">
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/about" Component={About}/>
                    <Route path="/contact" Component={Contact}/>
                </Routes>
            </div>
        );
    }
}