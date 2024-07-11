import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {BookAddingForm} from "../../page/BookAddingForm/BookAddingForm";
import {Card, Paper} from "@mui/material";

export class UserContent extends Component {
    render() {
        return (
            <Paper elevation={3} className="w-[80%] h-[93.2%] absolute top-12 right-6">
                <Routes>
                    <Route path="/" Component={BookAddingForm} />
                </Routes>
            </Paper>
        );
    }
}