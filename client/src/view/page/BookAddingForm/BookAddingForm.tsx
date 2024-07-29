import {Component} from "react";
import {FormControl, InputLabel, Select, TextField, MenuItem, Card, Input} from "@mui/material";
import addIcon from '../../../images/addImage.png'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
// @ts-ignore
import LoadingButton from '@mui/lab/LoadingButton';
// @ts-ignore
import SaveIcon from '@mui/icons-material/Save';


interface BookProps {
    data: any
}

interface BookAddState {
    name: string;
    des:string;
    category:string;
    qty: any;
    buyPrice: any;
    salePrice:any;
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
            qty:'',
            buyPrice: '',
            salePrice: '',
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
            <div className='relative'>
                <Card className='w-[45%] mt-5 absolute left-6'>
                    <p className='text-2xl mt-3 ml-5'>Book Details</p>
                    <form className='flex flex-col w-[90%] mt-16 ml-5 mb-10' onSubmit={this.handleOnSubmit}>
                        <TextField label="Name" variant="standard" required={true} type="text" name='name'
                                   value={this.state.name} onChange={this.handleInputOnChange}/>
                        <TextField label="Author" variant="standard" type="text" name='author' value={this.state.author}
                                   onChange={this.handleInputOnChange}/>
                        <TextField label="Supplier" variant="standard" type="text" name='supplier'
                                   value={this.state.supplier} onChange={this.handleInputOnChange}/>
                        <TextField label="Buy Price" variant="standard" type="number" name='buyPrice'
                                   value={this.state.buyPrice} onChange={this.handleInputOnChange}/>
                        <TextField label="Sale Price" variant="standard" type="number" name='salePrice'
                                   value={this.state.salePrice} onChange={this.handleInputOnChange}/>
                        <TextField label="Quantity" variant="standard" type="number" name='qty' value={this.state.qty}
                                   onChange={this.handleInputOnChange}/>


                        <FormControl variant="standard">
                            <InputLabel>Category</InputLabel>
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

                            <TextField label="Description" multiline rows={5} variant="standard" name='des'
                                       value={this.state.des} onChange={this.handleInputOnChange}/>
                        </FormControl>
                    </form>
                </Card>
                <Card className='w-[45%] h-[85vh]  mt-5 absolute right-6 '>
                    <img src={addIcon} className='w-32 h-auto ml-52 mt-10'/>
                    <Input type='file' id='inputPic'/>
                    <label form='inputPic'>Choose Image</label>
                    <ButtonGroup variant="contained" aria-label="Basic button group" className="absolute left-16  bottom-10">
                        <Button>Save</Button>
                        <Button>Update</Button>
                        <Button>Delete</Button>
                        <Button>Search</Button>
                        <Button>GetAll</Button>
                    </ButtonGroup>
                </Card>
            </div>
        );
    }
}