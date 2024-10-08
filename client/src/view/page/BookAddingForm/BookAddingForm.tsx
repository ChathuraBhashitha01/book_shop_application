import React, {useRef, useState} from "react";
import axios from "axios";
import { FormControl, InputLabel, Select, TextField, MenuItem, Card, Input } from "@mui/material";
import addIcon from '../../../images/addImage.png'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

interface BookAddState {
    code:string;
    name: string;
    des:string;
    category:string;
    qty: any;
    buyPrice: any;
    salePrice:any;
    author:string;
    supplier:string;
    picture:string;
    preview:string;
}

export const BookAddingForm= () => {

    const api = axios.create({
        baseURL: `http://localhost:4000`,
    });

    const [formData, setFormData] = useState<BookAddState>({
        code:'',
        name: '',
        des: '',
        category: '',
        author: '',
        supplier: '',
        qty: '',
        buyPrice: '',
        salePrice: '',
        picture: '',
        preview:''
    });

    // const [preview, setPreview] = useState(null);

    const handleInputOnChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
        console.log(formData);
    }

    const handleOnSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(formData);
    }


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setFormData((prevState) => ({
                    ...prevState,
                    picture: base64String
                }));
                setFormData((prevState) => ({
                    ...prevState,
                    preview: base64String
                }));
            };
            reader.readAsDataURL(file);
        }
    };


    const handleOnSave=async ()=>{
        if(formData.code!=='' && formData.name!=='' && formData.des!=='' && formData.category!=='' && formData.author!==''&& formData.supplier!==''
            && formData.qty!==''&& formData.buyPrice!==''&& formData.salePrice!==''&& formData.picture!==''){
            try {
                api.post('/api/v1/books/save',{
                    "code":formData.code,
                    "name": formData.name,
                    "des": formData.des,
                    "category": formData.category,
                    "author": formData.author,
                    "supplier": formData.supplier,
                    "qty": formData.qty,
                    "buyPrice": formData.buyPrice,
                    "salePrice": formData.salePrice,
                    "picture": formData.picture
                }).then((res: {data: any}) => {
                    const response = res.data;
                    alert(response);
                    console.log(response);
                }).catch((error: any) => {
                    console.error('Axios Error:', error);
                });
            }catch (error){
                console.error('Error:', error);
            }
        }else {
            alert("All Field are Required")
        }
    }

    const handleOnSearch=async ()=>{
        if(formData.code!==''){
            try {
                api.get('api/v1/books/find/'+formData.code).then((res:{data:any})=>{
                    const jasonData=res.data;
                    console.log(jasonData);
                    setFormData(jasonData);

                    setFormData((prevState) => ({
                        ...prevState,
                        preview: jasonData.picture
                    }));
                });

            }catch (error){
                console.error('Error:', error);
            }
        }else {
            alert("Required Code")
        }
    }

    const handleOnUpdate=async ()=>{
        if(formData.code!=='' && formData.name!=='' && formData.des!=='' && formData.category!=='' && formData.author!==''&& formData.supplier!==''
            && formData.qty!==''&& formData.buyPrice!==''&& formData.salePrice!==''&& formData.picture!=='') {
            try {
                api.patch('/api/v1/books/update', {
                    "code": formData.code,
                    "name": formData.name,
                    "des": formData.des,
                    "category": formData.category,
                    "author": formData.author,
                    "supplier": formData.supplier,
                    "qty": formData.qty,
                    "buyPrice": formData.buyPrice,
                    "salePrice": formData.salePrice,
                    "picture": formData.picture
                }).then((res: { data: any }) => {
                    const response = res.data;
                    alert(response);
                    console.log(response);
                }).catch((error: any) => {
                    console.error('Axios Error:', error);
                });
            } catch (error) {
                console.error('Error:', error);
            }
        }else {
            alert("All Field are Required")
        }
    }

    const handleOnDelete=async ()=>{
        if(formData.code!==''){
            try {
                api.delete('api/v1/books/delete/'+formData.code).then((res)=>{
                    console.log(res);
                });

            }catch (error){
                console.error('Error:', error);
            }
        }else {
            alert("Required Code")
        }
    }

    const handleOnClearAll= ()=>{


        setFormData((prevState) => ({
            code:'',
            name:'',
           des:'',
            category:'',
            author:'',
            supplier:'',
            qty:'',
           buyPrice:'',
            salePrice:'',
            picture:'',
            preview:'',
        }));
    }

    return (
        <div className='relative'>
            <Card className='w-[45%] mt-5 absolute left-6'>
                <p className='text-2xl mt-3 ml-5'>Book Details</p>
                <form className='flex flex-col w-[90%] mt-8 ml-5 mb-10' onSubmit={handleOnSubmit}>
                    <TextField label="Code" variant="standard" required={true} type="text" name='code'
                               value={formData.code} onChange={handleInputOnChange} />
                    <TextField label="Name" variant="standard" required={true} type="text" name='name'
                               value={formData.name} onChange={handleInputOnChange} />
                    <TextField label="Author" variant="standard" type="text" name='author' value={formData.author}
                               onChange={handleInputOnChange} />
                    <TextField label="Supplier" variant="standard" type="text" name='supplier'
                               value={formData.supplier} onChange={handleInputOnChange} />
                    <TextField label="Buy Price" variant="standard" type="number" name='buyPrice'
                               value={formData.buyPrice} onChange={handleInputOnChange} />
                    <TextField label="Sale Price" variant="standard" type="number" name='salePrice'
                               value={formData.salePrice} onChange={handleInputOnChange} />
                    <TextField label="Quantity" variant="standard" type="number" name='qty' value={formData.qty}
                               onChange={handleInputOnChange} />
                    <FormControl variant="standard">
                        <InputLabel>Category</InputLabel>
                        <Select
                            id="demo-simple-select-standard"
                            value={formData.category}
                            name='category'
                            onChange={handleInputOnChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='novel'>Novel</MenuItem>
                            <MenuItem value='fantasy'>Fantasy</MenuItem>
                            <MenuItem value='scienceFiction'>Science Fiction</MenuItem>
                            <MenuItem value='dystopian'>Dystopian</MenuItem>
                        </Select>
                        <TextField label="Description" multiline rows={5} variant="standard" name='des'
                                   value={formData.des} onChange={handleInputOnChange} />
                    </FormControl>
                </form>
            </Card>
            <Card className='w-[45%] h-[87vh] mt-5 absolute right-6'>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <input type="file" onChange={handleFileChange}/>
                    </form>
                    {formData.preview && (
                        <div>
                            <img src={formData.preview} alt="Preview" className='w-56 h-auto absolute top-12  left-0 right-0 mx-auto'/>
                        </div>
                    )}
                </div>

                <ButtonGroup variant="contained" aria-label="Basic button group" className="absolute left-16 bottom-10">
                    <Button onClick={handleOnSave}>Save</Button>
                    <Button onClick={handleOnUpdate}>Update</Button>
                    <Button onClick={handleOnDelete}>Delete</Button>
                    <Button onClick={handleOnSearch}>Search</Button>
                    <Button onClick={handleOnClearAll}>Clear</Button>
                </ButtonGroup>
            </Card>
        </div>
    );
}