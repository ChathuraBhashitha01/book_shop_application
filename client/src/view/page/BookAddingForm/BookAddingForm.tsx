import {Component} from "react";
import {Box, FormControl, InputLabel, Select, TextField, Button, Stack, Card} from "@mui/material";
import {MenuItem} from "react-pro-sidebar";

interface BookProps {
    data: any
}

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

export class BookAddingForm extends Component<BookProps,BookAddState> {

    constructor(props: any) {
        super(props);

        this.state = {
            name: '',
            des:'',
            author:'',
            supplier:'',
            qty:0,
            buyPrice:0,
            salePrice:0,
            picture:''
        }
    }

    render() {
        return (
            <div>
                <form  className='flex flex-col w-[50%] mt-5 ml-4 gap-2'>
                    <TextField id="txtName" label="Name" variant="standard" required={true} type="text" value={this.state.name}/>
                    <TextField id="txtAuther" label="Author" variant="standard" type="text" value={this.state.author} />
                    <TextField id="txtSupplier" label="Supplier" variant="standard" type="text" value={this.state.supplier} />
                    <TextField id="txtBuyPrice" label="Buy Price" variant="standard" type="number" value={this.state.buyPrice} />
                    <TextField id="txtSalePrice" label="Sale Price" variant="standard" type="number" value={this.state.salePrice} />
                    <TextField id="txtQty" label="Quantity" variant="standard" type="number" value={this.state.qty} />


                    <FormControl sx={{ m: 3, minWidth: 240 }}>
                        <InputLabel id="bookCategory">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            className='mt-6 w-[70%]'

                        >
                            <MenuItem >Ten</MenuItem>
                            <MenuItem >Twenty</MenuItem>
                            <MenuItem >Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <form className="w-[90%] ml-5 mt-5">
                    <TextField
                        id="outlined-password-input"
                        label="Description"
                        type="text"
                        className="w-[100%] "
                    />
                </form>
            </div>
        );
    }
}