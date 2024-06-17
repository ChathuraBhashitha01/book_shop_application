import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../page/Home/Home";
import {About} from "../../page/About/About";

export class MainContent extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/about" Component={About}/>
                </Routes>
            </div>
        );
    }
}