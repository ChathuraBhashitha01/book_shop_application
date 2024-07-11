import {Component} from "react";
import {Box, Card, Paper, TextField} from "@mui/material";
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'


interface BookAddState {
    name: string;
    des:string;
    qty: number;
    buyPrice: number;
    salePrice:number;
    author:string;
    supplier:string;
    picture:string;
}

export class BookAddingForm extends Component<BookAddState> {
    render() {
        return (
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 3, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="text"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="text"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="text"
                        />
                        <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </Box>
            </div>
        );
    }
}