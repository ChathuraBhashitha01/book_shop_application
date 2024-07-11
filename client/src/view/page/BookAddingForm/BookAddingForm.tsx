import {Component} from "react";
import {Box, TextField} from "@mui/material";

export class BookAddingForm extends Component {
    render() {
        return (
            <>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className="flex flex-col">
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            className="w-24"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="text"
                            autoComplete="current-password"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="text"
                            autoComplete="current-password"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="text"
                            autoComplete="current-password"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="text"
                            autoComplete="current-password"
                        />
                    </div>
                </Box>
            </>
        );
    }
}