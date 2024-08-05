import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {BookAddingForm} from "../../page/BookAddingForm/BookAddingForm";
import {BookTableForm} from "../../page/BookTableForm/BookTableForm";
import {Card, Paper} from "@mui/material";

export class UserContent extends Component {
    render() {
        return (
            <Paper elevation={3} className="w-[80%] h-[91%] absolute top-14 right-6" >
                <Routes>
                    <Route path="/" Component={BookAddingForm} />
                    <Route path='/bookDetails' Component={BookTableForm}/>
                </Routes>
            </Paper>
        );
    }
}