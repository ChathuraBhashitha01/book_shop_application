import {Component} from "react";
import {Box, FormControl, InputLabel, Select, TextField, Button,Stack} from "@mui/material";
import {MenuItem} from "react-pro-sidebar";
import * as timers from "node:timers";

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

export class BookAddingForm extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedFile: null,
            preview: null,
        };
    }

    handleFileChange = (event: { target: { files: any[]; }; }) => {
        const file = event.target.files[0];
        this.setState({
            selectedFile: file
        });
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({
                    preview: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    render() {
        // @ts-ignore
        return (
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="txtName"
                            label="Name"
                        />
                        <TextField
                            id="txtAuthor"
                            label="Author"
                            type="text"
                        />
                        <TextField
                            id="txtBuyPrice"
                            label="Buy Price"
                            type="number"
                        />
                        <TextField
                            id="txtSalePrice"
                            label="Sale Price"
                            type="number"
                        />
                        <TextField
                            id="txtQuantity"
                            label="Quantity"
                            type="number"
                        />
                        <FormControl sx={{ m: 3, minWidth: 240 }}>
                            <InputLabel id="bookCategory">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"

                            >
                                <MenuItem >Ten</MenuItem>
                                <MenuItem >Twenty</MenuItem>
                                <MenuItem >Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Box>
                <form className="w-[90%] ml-5 mt-5">
                    <TextField
                        id="outlined-password-input"
                        label="Description"
                        type="text"
                        className="w-[100%] "
                    />
                </form>
                {/*<div>*/}
                {/*    <form onSubmit={this.handleSubmit}>*/}
                {/*        <input type="file" onChange={this.handleFileChange}/>*/}
                {/*        <Button  variant="contained" type="submit">upload</Button>*/}
                {/*    </form>*/}
                {/*    {this.state.preview && (*/}
                {/*        <div>*/}
                {/*            <h3>Image Preview:</h3>*/}
                {/*            <img src={this.state.preview} alt="Preview" style={{ width: '200px' }} />*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</div>*/}

            </div>
        );
    }
}