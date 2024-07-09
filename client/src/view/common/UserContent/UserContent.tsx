import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {BookAddingForm} from "../../page/BookAddingForm/BookAddingForm";

export class UserContent extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/bookAddForm" Component={BookAddingForm} />
                </Routes>
            </>
        );
    }
}