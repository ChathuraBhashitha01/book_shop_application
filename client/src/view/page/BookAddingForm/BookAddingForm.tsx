import {Component} from "react";
import {FormControl, InputLabel, Select, TextField, MenuItem} from "@mui/material";


interface BookProps {
    data: any
}

interface BookAddState {
    name: string;
    des:string;
    category:string;
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
            des: '',
            category: '',
            author: '',
            supplier: '',
            qty:0,
            buyPrice: 0,
            salePrice: 0,
            picture: ''
        }
    }

    private handleInputOnChange = (event: { target: { name: any, value: any } }) => {
        const {name, value} = event.target;

        // @ts-ignore
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    private handleOnSubmit = (event: { preventDefault: () => void; }) =>{
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form  className='flex flex-col w-[50%] mt-20 ml-4' onSubmit={this.handleOnSubmit}>
                    <TextField label="Name" variant="filled" required={true} type="text" name='name' value={this.state.name} onChange={this.handleInputOnChange}/>
                    <TextField label="Author" variant="filled" type="text" name='author' value={this.state.author} onChange={this.handleInputOnChange} />
                    <TextField label="Supplier" variant="filled" type="text" name='supplier' value={this.state.supplier} onChange={this.handleInputOnChange} />
                    <TextField label="Buy Price" variant="filled" type="number" name='buyPrice' value={this.state.buyPrice} onChange={this.handleInputOnChange} />
                    <TextField label="Sale Price" variant="filled" type="number" name='salePrice' value={this.state.salePrice} onChange={this.handleInputOnChange} />
                    <TextField label="Quantity" variant="filled" type="number" name='qty' value={this.state.qty} onChange={this.handleInputOnChange} />


                    <FormControl variant="filled" >
                        <InputLabel >Category</InputLabel>
                        <Select
                            id="demo-simple-select-standard"
                            value={this.state.category}
                            name='category'
                            onChange={this.handleInputOnChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='fantasy'>Fantasy</MenuItem>
                            <MenuItem value='scienceFiction'>Science Fiction</MenuItem>
                            <MenuItem value='dystopian'>Dystopian</MenuItem>
                        </Select>

                        <TextField label="Description" multiline rows={5} variant="filled" name='des' value={this.state.des} onChange={this.handleInputOnChange} />
                    </FormControl>
                </form>
            </div>
        );
    }
}