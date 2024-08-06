import React, {Component} from "react";
import {CartItem} from "../../../model/CartItem";
import {Card, Input, TextField} from "@mui/material";
import axios from "axios";

interface ShoppingCartProps {
    itemsList: CartItem[];
}

interface ShoppingState{
    paymentID:string;
    date:any;
    total:number;
    itemsList: CartItem[];
}

export class PlaceOrderForm extends Component<ShoppingCartProps,ShoppingState> {

    private api:any;

    constructor(props: {
        itemsList: CartItem[];
    }) {
        super(props as ShoppingCartProps);
        this.api= axios.create({
            baseURL: `http://localhost:4000`
        });
        this.state = {
            paymentID:'',
            date:new Date(),
            total: this.calculateTotal(props.itemsList),
            itemsList: props.itemsList,
        }
    }

    private formatDate(date: { toLocaleDateString: (arg0: undefined, arg1: { year: string; month: string; day: string; }) => any; }) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }

    private calculateTotal(items: CartItem[]) {
        return items.reduce((total, item) => {
            return total + item.itemCount * item.book.salePrice;
        }, 0);
    }


    private removeRow = (index: number) => {
        const newItemsList = this.state.itemsList.filter((_, i) => i !== index);
        const newTotal = this.calculateTotal(newItemsList);
        this.setState({ itemsList: newItemsList, total: newTotal });
    };

    private handleIDChange=(event: { target: { name: any; value: any; }; })=>{
        const {value } = event.target;
        this.setState((prevState) => ({
            ...prevState,
            paymentID: value
        }));
    }

    private handlePlaceOrder=async ()=>{
        try {
            this.api.post('/api/v1/payment/placeOrder',{
                "paymentID":this.state.paymentID,
                "date": this.state.date,
                "total": this.state.total,
                "itemsList": this.state.itemsList,
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
    }

    render() {
        const { date ,total,itemsList,paymentID} = this.state;

        return (
            <div>
                <form className='flex flex-col w-[20%] mt-16 ml-10'>
                    <TextField label="OrderID" variant="standard" required={true} type="text" name='code' value={this.state.paymentID} onChange={this.handleIDChange}/>
                </form>
                <div className=" w-[100vw] h-[50vh] flex mt-10">
                    <table className="w-[80%] mx-6 overflow-hidden overflow-y-scroll">
                        <tr className="bg-gray-400 h-10">
                            <th className="text-10 font-normal border-black border-[0.5px] px-1">Code</th>
                            <th className="text-10 font-normal border-black  border-[0.5px] px-1">Name</th>
                            <th className="text-10 font-normal border-black  border-[0.5px]  px-1">Unit Price</th>
                            <th className="text-10 font-normal  border-black border-[0.5px] px-1">Quantity</th>
                            <th className="text-10 font-normal border-black border-[0.5px] px-1">Total Price</th>
                            <th className="text-10 font-normal border-black border-[0.5px] px-1">Remove</th>
                        </tr>
                        {
                            this.props.itemsList
                                .length === 0 ?
                                <tr>
                                    <td colSpan={6} className="border-black border-[0.5px] px-1">
                                        <p className="text-10 text-center">No Items to Display! </p>
                                    </td>
                                </tr>
                                :
                                this.props.itemsList.map((item, index) => (
                                    <tr key={index} className="border-black  border-[0.5px]  px-1">
                                        <td className="text-10 border-black border-[0.5px] px-1">{item.book.code}</td>
                                        <td className="text-10 border-black border-[0.5px] px-1">{item.book.name}</td>
                                        <td className="text-10 border-black border-[0.5px] px-1">{item.book.salePrice}</td>
                                        <td className="text-10 border-black border-[0.5px] px-1">{item.itemCount}</td>
                                        <td className="text-10 border-black border-[0.5px] px-1">{(item.itemCount * item.book.salePrice)}</td>
                                        <td className="text-10 border-black border-[0.5px] px-1">
                                            <button className='w-14 bg-blue-600 rounded-lg'
                                                    onClick={() => this.removeRow(index)}>Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                        }
                    </table>

                    <Card className='w-[15vw]'>
                        <label className='text-lg'>Pay Amount</label>
                        <label className='ml-5 text-lg'>Rs {this.state.total}/=</label>
                        <form className='flex flex-col w-[90%] mt-16'>
                            <TextField label="Card" variant="standard" required={true} type="text" name='code'/>
                            <TextField label="Pin" variant="standard" required={true} type="text" name='name'/>
                        </form>
                        <button className='w-full bg-blue-600 h-10 mt-16' onClick={this.handlePlaceOrder}>Place Order</button>

                    </Card>

                </div>
                <div className=' w-full h-[21vh]'>

                </div>
            </div>

        );
    }
}